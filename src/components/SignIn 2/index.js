import classNames from "classnames/bind";
import styles from "./login.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SignIn } from "../../../action";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles)

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")


    const state = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    console.log("login:", state)

    const navigate = useNavigate();
    // let histtory = useHis
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/login-Account", {
            email: email,
            password: password
        })
            .then(response => {
                const data = response.data
                const newData = data.find(data => data.id == 1)
                const UrlCode = "/" + newData.name + "-" + newData.email
                // const HomeLogin = publicRouter[publicRouter.length - 1]

                console.log("dataUser:: ",data)
                if (response.status == 200) {
                    dispatch(SignIn(data))
                    navigate(UrlCode)
                }
                setUser(data)
                console.log("dsadasd",user)
                // console.log("component:: ",urlCodee)
            })
            .catch(error => {
                console.log(error)
            })
    }
    // useEffect(() => {
    //     // console.log("data",data)
    //     if (user.status === 200) {
    //         const data = user.data
    //         const newData = data.find(data => data.id == 1)
    //         const UrlCode = "/" + newData.name + "-" + newData.email
    //         dispatch(SignIn(user.data))
    //         navigate(UrlCode)
    //     }
    // }, [user]);
    console.log("sign", user)   
    return (
        <div className={cx("wrapLogin")}>
            <div className={cx('wrap')}>
                <div className={cx("Login")}>
                    <form className={cx("form")} method="post" onSubmit={(e) => handleSubmit(e)} >
                        <div>
                            <h2 className={cx("title")}>Đăng nhập</h2>
                            <label className={cx("lable")}>Đăng nhập với email</label><br />
                            <input className={cx("input")} id="Em" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} text="text" placeholder="Email" />
                        </div>
                        <div>
                            <input className={cx("input")} value={password} onChange={e => setPassword(e.target.value)} name="pass" type="password" placeholder="password" />
                        </div>
                        <button className={cx("btn_Login")} >Đăng nhập</button>
                    </form>
                </div>
                <div className={cx("option")}>
                    <h3 className={cx("textOption")}>Sản phẩm, dịch vụ bạn có thể sử dụng với tài khoản VnExpress</h3>
                    <div className={cx("wrapOption")}>
                        <img className={cx("icon_Option")} src="https://s1.vnecdn.net/myvne/i/v154/ls/graphics/vne_international.svg" />
                        <img className={cx("icon_Option")} src="https://s1.vnecdn.net/myvne/i/v154/ls/graphics/Ngoisao.svg" />
                        <img className={cx("icon_Option")} src="https://s1.vnecdn.net/myvne/i/v154/ls/graphics/Ebox.svg" />
                        <img className={cx("icon_Option")} src="https://s1.vnecdn.net/myvne/i/v154/ls/graphics/Marathon.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;