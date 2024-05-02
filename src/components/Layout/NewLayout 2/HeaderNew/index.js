import styles from "./HeaderNew.module.scss";
import classNames from "classnames/bind";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function HeaderNew({boolean, setBoolean}) {
    const [userLogin, setUserLogin] = useState(false)
    const [profile, setProfile] = useState([])

    const state = useSelector(state => state.userReducer);
    // const dispatch = useDispatch();

    console.log("head:: ", state)
    console.log("head2:: ", profile)

    useEffect(() => {
        if (state.length > 0) {
            setUserLogin(true)
            setProfile(state)
        } else {
            setUserLogin(false)
        }
    }, []);

    const handleToggle = () =>{
        setBoolean(!boolean)
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("Header_icon")}>
                <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v757/v2_2019/pc/graphics/logo.svg" alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                <div className={cx("Menu")} onClick={handleToggle}>
                    <i class="fa-solid fa-bars"></i>
                    <p className={cx("stye_mar")}>Danh mục</p>
                </div>
            </div>

            <div className={cx("Wraper_right")}>
                <div className={cx("wrapper_Search")}>
                    <input
                        className={cx("Header_Search")} placeholder="Tìm kiếm" type="text">
                    </input>
                    <i className={cx("fa-solid fa-magnifying-glass", "changeColor")}></i>
                </div>
                <div className={cx("check")}></div>
                {userLogin ? <div>{profile.map((item, index) => {
                return (
                    <div key={index} className={cx("WrapUser")}>
                        <img src={item.avatar} className={cx("avatarUser")} alt={item.name} />
                        <div className={cx("wrapper_User")}><a className={cx("Header_User")}>{item.name}</a></div>
                    </div>
                )
            })}</div>
                :
                <div className={cx("wrapper_Login")}><i className={cx("fa-regular fa-user", "test")} ></i><a className={cx("Header_Login")} href="/login">Đăng nhập</a></div>}
            <i className={cx("fa-regular fa-bell")}></i>
            </div>
        </div>
    );
}

export default HeaderNew;