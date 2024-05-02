import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";

import Header from "./Header"
import Option from "./Options";
import Sidebar from "./Sidebar"
import Main from "./main"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles)
    

function DefaultLayout() {
    // const params = useParams()
    // console.log("paramsssssss", params)
    const apii = `https://643c9db5f0ec48ce9046b0da.mockapi.io/vnexpressNumber1`
    // console.log("APPI",apii)
    const [data,setData] = useState("")
    useEffect(() => {
        setData(apii)
    }, []);
    return (
        <div className={cx("Wrapper")}>
            <div className={cx("Header")}>
                <Header />
            </div>
            <div className={cx("Wrapper_Option")}>
                <Option />
            </div>
            <div className={cx("Main")}>
                {/* <div className={cx("Wrapper_Sidebar")}><Sidebar /></div> */}
                <div className={cx("Wrapper_Main")}><Main data={data} /></div>

            </div>
        </div>
    );
}

export default DefaultLayout;