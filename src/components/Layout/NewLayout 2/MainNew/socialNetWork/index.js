import styles from "./socialNetwork.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function SocialNetwork() {

    const [scrollY, setScrollY] = useState();


    const apiSocial = [
        <i class={cx("fa-brands fa-facebook", "edit_Social")}></i>,
        <i class={cx("fa-brands fa-square-twitter", "edit_Social")}></i>,
        <i class={cx("fa-brands fa-linkedin", "edit_Social")}></i>,
        <i class={cx("fa-brands fa-tiktok", "edit_Social")}></i>,
        <i class={cx("fa-solid fa-message", "edit_Social")}></i>,
        <i class={cx("fa-solid fa-circle-arrow-left", "edit_Social")}></i>,
        <i class={cx("fa-regular fa-flag", "edit_Social")}></i>,
    ]

    useEffect(() => {
        const socialNetwork = document.querySelector(".socialNetwork_Main_social_network__wC-Y4")
        const Main_edit = document.querySelector(".Main_content")
        const handleScroll = () => {
            const scrollTwo = document.documentElement.scrollTop

            setScrollY(scrollTwo)
        }
        if(scrollY >= 150){
            socialNetwork.style.position = "fixed";
            socialNetwork.style.paddingTop = `0px`;

            Main_edit.style.marginLeft = `67px`
        } 
         if(scrollY < 150 ){
            socialNetwork.style.position = "absolute";
            socialNetwork.style.paddingTop = `150px`;


        }

        document.addEventListener("scroll", handleScroll)
    }, [scrollY]);
    return (
        <div className={cx("Main_social_network")} >
            <div className={cx("wrap_social")}>
                {apiSocial.map((obj, index) => {
                    return (<div key={index} className={cx("Social")}>
                        <a href="/" clas>{obj}</a>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default SocialNetwork;