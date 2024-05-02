import styles from "./Option.module.scss";
import classNames from "classnames/bind";
import {useEffect,useState} from "react"
// import option from "./Option.css"


function Option() {

    const cx = classNames.bind(styles)
    const TypeOption = [
        {
            type: "Thời sự",
            childrenn: [
                "chính trị",
                "Dân sinh",
                "Lao động - Việc làm",
                "Giao thông",
                "Mê Công",
                "Quỹ hy vọng",
                "Tết quý mão"
            ]
        },
        {
            type: "Góc nhìn",
            childrenn: [
                "Bình luận nhiều",
                "Y tế & sức khoẻ",
                "Chính trị & chính sách",
                " daonh & qurn trị",
                "Giáo dục & tri thức",
                "Môi trường",
                "Văn hoá & lối sống",
                "Covid 2019",
                "Tác giả"
            ]
        },
        {
            type: "Thế giới",
            childrenn: [
                "Tư liệu",
                "Phân tích",
                "Ngừoi Việt 5 châu",
                "Cuộc Sống đó đây",
                "Quân Sự"
            ]


        },
        {

            type: "Video",
            childrenn: [
                "Thời Sự",
                "Nhịp Suống",
                "Tôi Kể",
                "Food",
                "Chuyện núi rùng",
                "Pháp luật",
            ]
        },
        {
            type: "Podcasts",
            childrenn: [
                "Vnxpress hôm nay",
                "Tiền làm gì",
                "Tài chính cá nhân",
                "Giải mã",
                "Họ nói gì",
                "Hộp đen",
                "Ly hon",
                "Thầm thì",
                "Bạn ổn không"
            ]
        },
        {
            type: "Kinh doanh",
            childrenn: [
                "Quốc tế",
                "Doanh nghiệp",
                "Chứng khoán",
                "Bất động sản",
                "Ebank",
                "Vi mô",
                "Tiền của tôi",
                "Bảo hiểm",
                "Hàng hoá"
            ]
        },
        {
            type: "Khoa học",
            childrenn: [
                "KHoa học trong nước",
                "Tin tức",
                "Phát minh",
                "Ứng dụng",
                "Thế giới tự nhiên",
                "Thưởng thức",
                "Sáng kiến khoa học",
            ]
        },
        {
            type: "Giải trí",
            childrenn: [
                "Giới sao",
                "Video",
                "Phim nhạc",
                "Thời trang",
                "Làm đẹp",
                "Sách",
                "Sân khấu - Mỹ thuật",
            ]
        },
        {
            type: "Thể thao",
            childrenn: [
                "Bóng đá",
                "Marathon",
                "Lịch thi đấu",
                "Tennis",
                "Bundesliga",
                "Hậu trường",
                "các môn khác",
                "Hậu trường",
                "video"
            ]
        },
        {
            type: "Pháp luật",
            childrenn: [
                "Hồ sơ",
                "Tư vấn",
                "Video  ",
            ]
        },
        {
            type: "Giáo dục",
            childrenn: [
                "Tin tức",
                "Tuyển sinh",
                "Chân dung",
                "Du học",
                "Học tiếng anh",
                "Trắc nghiệm",
            ]
        },
        {
            type: "Sức khoẻ",
            childrenn: [
                "Tư vấn",
                "Tin tức",
                "Dinh dưỡng",
                "Sức khoẻ",
                "Đàn ông",
                "Các bệnh",
                "Vaccine",
            ]
        },
        {
            type: "Đời sống",
            childrenn: [
                "Nhịp sống",
                "Tổ ấm",
                "Bài học sống",
                "Nhà",
                "Cooking",
                "Tiêu dùng",
            ]
        },
    ]
 
    const [scroll, setScroll] = useState(0);
 

    useEffect(() => {
        const handlescroll = () => {
            const scrollNew = document.documentElement.scrollTop
            setScroll(scrollNew)
        }
        window.addEventListener("scroll", handlescroll)
        const position = document.querySelector(".DefaultLayout_Wrapper_Option__OvQAi")
        const edit = document.querySelector(".DefaultLayout_Main__uOdcR")
        
        if(scroll >= 50 ){
            position.style.position = "fixed"
            position.style.top = 0
            position.classList.remove()
            position.classList.add("testt3")
            position.style.zIndex = 1
            position.style.backgroundColor = "#fff"
            position.style.boxShadow = "0 2px 8px rgba(0,0,0,.1)"
            edit.style.marginTop = `51px`;

        } else if( scroll < 50 ){
            position.style.position = "relative"
            position.classList.remove("testt3")
            edit.style.marginTop = 0;

        }
        return ()=>{
            window.removeEventListener("scroll", handlescroll)
        } 

        
    }, [scroll]);

    return (
        <ul className={cx("wraper_Option")}>
            {TypeOption.map((arr,index)=>{
                return (
                <li className={cx("Wrapper_item")} key={index}>
                    <a href="/" className={cx("Option")}>{arr.type}</a>
                    <div className={cx("Option_children")}>
                        {arr.childrenn.map((child,index)=>{
                           return (
                             <a className={cx("children-Option")} key={index}>{child}</a>
            )})}
                    </div>
                </li>
                )
            })}
        </ul>
    )
}

export default Option;