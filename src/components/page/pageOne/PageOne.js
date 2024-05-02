import styles from "./pageOne.module.scss"
import classNames from "classnames/bind";

import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Main from "../../Layout/main";
import OptionOne from "../../Layout/OptionCopy";
const cx = classNames.bind(styles);

function PageOne() {
    console.log()
   
    return (
        <div className={cx("Wrapper")}>
            <div className={cx("Header")}>
                <Header />
            </div>
            <div className={cx("Wrapper_Option_copy")}>
                <OptionOne />
            </div>
            <div className={cx("Main_One")}>
                <div className={cx("Wrapper_Sidebar")}><Sidebar /></div>
                <div className={cx("Wrapper_Main")}><Main /></div>
            </div>
        </div>
    );
}

export default PageOne; 