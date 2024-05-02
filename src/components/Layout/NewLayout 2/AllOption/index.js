import styles from "./Alloption.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function AllOption() {
    return ( <h1 className={cx("testt2")}>AllOption</h1> );
}

export default AllOption;