import styles from "./pageTwo.module.scss"
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import HeaderNew from "../../NewLayout/HeaderNew";
import OptionNew from "../../NewLayout/OptionNew";
import AllOption from "../../NewLayout/AllOption";
import { getData } from "../../../action";
import MainNew from "../../NewLayout/MainNew";
import { useDispatch, useSelector } from "react-redux";
import Chat from "../../NewLayout/Chat";

const cx = classNames.bind(styles);


function PageTwo() {
    const params = useParams();
    // console.log(params)
    // params {
    //     id: 1
    // }
    const [get, setGet] = useState([]);
    useEffect(() => {
        axios.get(`https://643c9db5f0ec48ce9046b0da.mockapi.io/vnexpress${params.id}`)
        .then(response => {
            setGet(response.data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {

        })
    }, []);

    const state = useSelector(state => state.reducerMain)
    const dispatch = useDispatch()
    useEffect(() => {
        if(get){
            dispatch(getData(get))
        }
    }, [get]);
    // console.log("render",state)
    const [boolean, setBoolean] = useState(false);
    return (
        <div className={cx("Wrapper")}>
            <div className={cx("HeaderTwo")}>
                <HeaderNew setBoolean={setBoolean} boolean={boolean}/>
                {boolean  && <AllOption/>}
            </div>
            <div className={cx("Wrapper_OptionTwo")}>
                <OptionNew />
            </div>
            <div className={cx("MainTwo")}>
                <MainNew data={state} params={params.id}/>
            </div>
            <div className={cx("WrapChat")}>
                <Chat params={params}/>
            </div>
        </div>
    );
}

export default PageTwo; 