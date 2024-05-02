import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";


import styles from "./Header.module.scss";
import classNames from "classnames/bind";


const cx = classNames.bind(styles)

function Header() {
    const [date, setDate] = useState()
    const [userLogin, setUserLogin] = useState(false)
    const [profile, setProfile] = useState([])

    const state = useSelector(state => state.userReducer)
    // const dispatch = useDispatch();

    useEffect(() => {
        const dateee = new Date()
        let day = dateee.getDate()
        let datee = dateee.getMonth() + 1
        let year = dateee.getFullYear()
        setDate(priv => {
            return priv = `${day} / ${datee} / ${year}`
        })
    }, [])

    const dataLocal = JSON.parse(localStorage.getItem("ACCOUNT_LOG"))

    // console.log("dataLocal:: ", dataLocal.length > 0)


    return (
        <div className={cx("wrapper")}>
            <div className={cx("Header_icon")}>
                <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v757/v2_2019/pc/graphics/logo.svg" alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                <span className={cx("Current_Date", "current_copy")}>{date}</span>
            </div>
            <div className={cx("wrapper_new")}><i className="fa-regular fa-clock"></i><a className={cx("Header_new")} href="/">Mới nhất</a></div>
            <div className={cx("wrapper_area")}><i className="fa-sharp fa-solid fa-location-dot"></i><a className={cx("Header_area")} href="/">Tin theo khu vực</a></div>
            <div className={cx("wrapper_internation")}><a className={cx("Header_internation")} href="/">International</a></div>
            <div className={cx("wrapper_Search")}>
                <input
                    className={cx("Header_Search")} placeholder="Tìm kiếm" type="text">
                </input>
                <i className={cx("fa-solid fa-magnifying-glass", "changeColor")}></i>
            </div>
            <div className={cx("check")}></div>
            {dataLocal ? <div>{dataLocal.map((item, index) => {
                return (
                    <div key={index} className={cx("WrapUser")}>
                        <img src={item.avatar} className={cx("avatarUser")} alt={item.name} />
                        <div className={cx("wrapper_User")}><a className={cx("Header_User")}>{item.name}</a>
                            <div className={cx("post_New")}>
                                <ul className={cx("post_Option")}>
                                    <li>
                                        <a className={cx("post") } href="/create_post">POST</a>
                                    </li>
                                    <li>
                                        <a className={cx("log_Out")}>LOG OUT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}</div>
                :
                <div className={cx("wrapper_Login")}><i className={cx("fa-regular fa-user", "test")} ></i><a className={cx("Header_Login")} href="/login">Đăng nhập</a></div>}
            <i className={cx("fa-regular fa-bell")}></i>
        </div>
    )
}

export default Header;