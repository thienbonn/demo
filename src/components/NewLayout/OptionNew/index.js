import styles from "./OptionNew.module.scss";
import classNames from "classnames/bind";
import { useEffect,useState } from "react";

const cx = classNames.bind(styles)

const UpNew = [
    {
        title: "Chiến sự Nga - Ukraine",

    },
    {
        title: "Xe tăng NATO",
    },
    {
        title: "Trận Bakhmut",
    },
    {
        title: "Đạn uranium nghèo",
    },
    {
        title: "Cục diện",
    },
]

function OptionNew() {
        const [scroll, setScroll] = useState();
useEffect(() => {
    const OptionTwo = document.querySelector(".pageTwo_Wrapper_OptionTwo__iAHQ5")
    const MainTwo = document.querySelector(".MainNew_Wrap__azwBa")

    const handleScroll = () => {
        const heightScroll = document.documentElement.scrollTop;
        setScroll(heightScroll)

    };
        if(scroll >= 50){
            OptionTwo.style.position = "fixed";
            OptionTwo.style.top = 0;
            OptionTwo.style.backgroundColor = "#fff";
            OptionTwo.style.boxShadow = "0 2px 8px rgba(0,0,0,.1)";
            MainTwo.style.marginTop = `50px`;
            
            
        } else if(scroll < 50) {
            OptionTwo.style.position = "relative";
            OptionTwo.style.top = 51;
            OptionTwo.style.backgroundColor = "#fff";
            OptionTwo.style.boxShadow = "none";
            MainTwo.style.marginTop = 0;
        }
       
    

    document.addEventListener("scroll",handleScroll)
    return () =>{
        document.removeEventListener("scroll",handleScroll)
    }
}, [scroll]);
    return (
        <ul className={cx("wraper_OptionTwo")}>
            {UpNew.map((obj, index) => {
                return (
                    <li className={cx("itemTwo")} key={index}>
                        <a className={cx("LinkTWo")} href="/">{obj.title}</a>
                    </li>
                )
            })}
        </ul>
    );
}

export default OptionNew;