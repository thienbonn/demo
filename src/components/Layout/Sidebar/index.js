import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const cx = classNames.bind(styles);


function Sidebar() {
    const one = [
        {
            img: "https://i1-vnexpress.vnecdn.net/2023/04/05/338401906119114394510378643987-7756-7026-1680712645.png?w=680&h=408&q=100&dpr=1&fit=crop&s=o8bnX506fUX7rfEsM6FVbA",
            title: "Khoảng trống trước tuổi hưu",
            content: "Mất việc ở tuổi 46, chị Trương Thị Hiếu tìm cách quay lại nhà máy để tiếp tục được đóng bảo hiểm xã hội, chờ hưu, nhưng bất thành.",
            item: "Thời sự",
        }
    ]

    const Api = [
        {
            title: "Thủ tướng yêu cầu gỡ khó quy định phòng cháy chữa cháy",
            content: "Bộ Công an, Xây dựng sẽ rà soát quy định phòng cháy chữa cháy để sửa đổi, đồng thời giảm mạnh thủ tục hành chính theo yêu cầu của Thủ tướng.",
        },
        {
            title: "Thủ tướng yêu cầu gỡ khó quy định phòng cháy chữa cháy",
            content: "Bộ Công an, Xây dựng sẽ rà soát quy định phòng cháy chữa cháy để sửa đổi, đồng thời giảm mạnh thủ tục hành chính theo yêu cầu của Thủ tướng.",
        },
        {
            test: "Góc nhìn",
            title: "Xây nhà giá rẻ khó đủ đường",
            content: "Một chủ đầu tư xin từ chối hưởng ưu đãi miễn tiền sử dụng đất, vì nếu nhận, chẳng khác gì 'ngược đãi'.",
            author: "Phạm Thanh Tuấn",
            avartar: "https://i1-vnexpress.vnecdn.net/2023/03/11/Tuanapng-1678553808.png?w=100&h=100&q=100&dpr=2&fit=crop&s=t3hpHxLvrYqQADNAstWfuw"
        },
    ]

    const [img, setImg] = useState("");
    useEffect(() => {
        const imge = Api.filter(arr => {
            return arr.img
        })
        setImg(prev => prev = img);
    })
    console.log(img)
    return (
        <div className={cx("Wrapper")}>
            <div className={cx("row", "Wrapper_content")}>
                <div className={cx("col-9", "content")}>
                    {one.map((arr, index) => {
                        return (
                            <div className={cx("row", "wrapper_pictur")} key={index}>
                                <div className={cx("col-8", "Picture")} >
                                    <img className={cx("Image")} src={arr.img}></img>
                                </div>
                                <div className={cx("col-4", "picture_content")}>
                                    <a href="/" className={cx("Pictur_link")}>{arr.title}</a>
                                    <p className={cx("pictur_content")}>{arr.content}</p>
                                    <div className={cx("pictur_footer")}>
                                        <p style={{ margin: 0, fontSize: 12, fontWeight: 500 }}>{arr.item}</p>
                                        <i className={cx("fa-regular fa-message", "iconMess")}></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className={cx("row", "wrapper_newContent")}>
                        {Api.map((api, index) => {
                            return (
                                <div className={cx("col-4", "item_new")} key={index}>
                                    <p>{api.test}</p>
                                    <a href="/page/1" className={cx("Title_content")}>{api.title}</a>
                                    <p className={cx("Title_Secon")}><a href="/page/2" className={cx("list_content")}>{api.content}</a></p>
                                    <div className={cx("warpper_avatar")}>
                                        <p>
                                            {api.author ? <a href="" className={cx("avatar_address")}><i>{api.author}</i></a> : <i ></i>}
                                        <i className={cx("fa-regular fa-message", "iconMess")}></i>
                                        </p>
                                        <img src={api.avartar} className={cx("avatar-auther",)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={cx("col-3", "banner")}>
                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20220428/pngtree-web-banners-abstract-background-beautiful-image_1098805.jpg"
                        className={cx("banner_container")}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar;