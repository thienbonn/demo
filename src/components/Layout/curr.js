import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";

import Header from "./Header"
import Option from "./Options";


const cx = classNames.bind(styles)

function Curr({Children}) {
    return (
        <div className={cx("Wrapper")}>
            <div className={cx("Header")}>
                <Header />
            </div>
            <div className={cx("Wrapper_Option")}>
                <Option />
            </div>
            {Children}
        </div>
    );
}

export default Curr;