import { useEffect } from "react";
import styles from "./Chat.module.scss";
import classNames from "classnames/bind";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { getMessager } from "../../../action";
import { useState } from "react";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Chat({ params }) {
    const paransss = useParams();
    // console.log(paransss)

    // console.log("paramm", paransss.id);
    const [message, setMessage] = useState([]);
    const [newData, setNewData] = useState();
    const [deleteMessager, setDeleteMessager] = useState(false);
    const [fix, setFix] = useState(false);
    const [fixId, setFixId] = useState();
    const [dataMessagerUser, setDataMessagerUser] = useState({});
    const [deleteId, setDeleteId] = useState();
    const [postMessager, setPostMessager] = useState("");
    const [isSend,  setIsSend] = useState(true);
    const [isFix, setIsFix] = useState(false);

    const userName = "test"
    const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0B7zVUd3DAxW00tWOcx9EOwsKGP1V0FtM-fQGv-gS8WmdW7d79u--P64nVampTd8_GE&usqp=CAU"

    // console.log(params.id)
    const state = useSelector(state => state.ReducerMessage);
    const dispatch = useDispatch();

    const createData = () => {
        axios.get(`http://localhost:8080/chat${paransss.id}`)
            .then((response) => {
                // console.log("api", response.data);
                setMessage(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        createData()
    }, []);

    useEffect(() => {
        if (message.length > 0) {
            dispatch(getMessager(message))
        }
    }, [message]);

    const handlePostMessager = (e) => {
        // e.preventDefault()
        axios.post(`http://localhost:8080/post${paransss.id}`, {
            userName: userName,
            messager: postMessager,
            avatar: avatar
        })
            .then((response) => {
                console.log("data",response.data);
                state.unshift(response.data)
                setPostMessager("")
                // console.log("state",state)
            })
    };
    // Handle Delete messages
    useEffect(() => {
        console.log(deleteId)
        if (deleteId) {
            axios.delete(`http://localhost:8080/page${paransss.id}/delete/${deleteId}`)
                .then((response) => {
                    setMessage(response.data)
                    createData()
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, [deleteId]);
    const handleDelete = (id) => {
        // setDeleteMessager(true)
        setDeleteId(id)
        console.log(deleteId)
    };


    useEffect(() => {
        let messager = postMessager
        if (fix) {
            axios.put(`http://localhost:8080/page${paransss.id}/edit/${fixId}`, {
                ...dataMessagerUser,
                messager
            })
                .then((response) => {
                    // console.log(response.data)
                    createData()
                    setIsSend(true)
                    setIsFix(false)
                    setPostMessager("")
                    setFix(false)
                })
        }
    }, [fix]);
    const handleFixMessager = () => {
        setFix(true)
    };
    const handleFix = (id) => {
        setIsSend(false)
        setIsFix(true)
        const fixMessager = state.find(item => item.id === id)
        // console.log("datacur", fixMessager.messager)
        setPostMessager(fixMessager.messager)
        setDataMessagerUser({
            userName: fixMessager.userName,
            avatar: fixMessager.avatar,
            id: fixMessager.id
        })
        setFixId(id)
    };
    // const routerr =" http://localhost:8080/page/" + paransss.id
    // console.log(routerr)
    return (
        <div>
            <div className={cx("Wrapper", "row")}>
                <div className={cx("col-9")}>
                    <h2 style={{ fontWeight: 600 }}>Y Kiến({state.length})</h2>
                    {/* <form method="POST" action={routerr} onSubmit={e => handleSubmit(e)}> */}
                    <div className={cx("WrapInputChat")}>
                        <div className={cx("wrapp_edit")}>
                            <input 
                            className={cx("send")} name="search" id="handleMessager" 
                            value={postMessager} onChange={e => setPostMessager(e.target.value)} type="text" placeholder="nhap noi dung">
                            </input>
                            <i className={cx("fa-regular fa-face-smile", "iconInput")}></i>
                        </div>
                    </div>
                    <div className={cx("Post")}>
                        {isSend && <button type="submit" onClick={() => handlePostMessager()}  className={cx("btnSend", "getClass_Send")}>Gửi</button>}
                        {isFix && <button type="submit" onClick={() => handleFixMessager()} className={cx("btnSend", "getClass_fix")}>Sửa</button>}
                    </div>
                    {/* </form> */}
                    {/* onClick={() => handlePostMessager()} */}
                </div>
            </div>
            <div className={cx("optionMessage", "col-9")}>
                <h3 className={cx("separate")}>Quan tâm nhất</h3>
                <h3 className={cx("separate")}>Mới nhất</h3>
            </div>
            {state.sort().map((item, index) => {
                return (
                    <div key={index} className={cx("WrapMessage", `delete_Item${item.id}`)}>
                        <div className={cx("col-9", "EditMessage")}>
                            <div className={cx("ContainerMessage")}>
                                <div className={cx("containerAvatar")}>
                                    <img className={cx("avatarUser")} src={item.avatar}></img>
                                </div>
                                <div>
                                    <div className={cx("WrapUserMessager")}>
                                        <div ><h3 className={cx("User")}>{item.userName}</h3></div>
                                        <h4 className={cx("MessageUser", `add_text${item.id}`)}>{item.messager}</h4>
                                    </div>
                                    <div className={cx("wrapOptionMessage")}>
                                        <div style={{ display: "flex" }}>
                                            <i className={cx("fa-regular fa-thumbs-up")}></i>
                                            <h4 className={cx("LikeMessager")}>Thích</h4>
                                        </div>
                                        <h4 className={cx("optionContact")}>Trả lời</h4>
                                        <button className={cx("sua")} onClick={() => handleFix(item.id)}>sửa</button>
                                        <button className={cx("xoa")} onClick={() => handleDelete(item.id)}>xoá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}



export default Chat;