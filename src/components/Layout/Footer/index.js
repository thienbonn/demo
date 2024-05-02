import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const apiFooter = [
    {
        option: [
            "Trang chủ",
            "Video",
            "Podcasts",
            "Ảnh",
            "Infographics",
            "Mới nhất",
            "Xem nhiều",
            "Tin nóng"
        ],
        selection: [
            "Thời sự",
            "Góc nhìn",
            "Thế giới",
            "Kinh doanh",
            "Giải trí"
        ],
        trend: [
            "Thể thao",
            "Pháp luật",
            "Giáo dục",
            "Sức khỏe",
            "Đời sống",
            "Du lịch"
        ],
        News: [
            "Khoa học",
            "Số hóa",
            "Xe",
            "Ý kiến",
            "Tâm sự",
            "Thư giãn"
        ],
        child: [
            "Rao vặt",
            "Startup",
            "Mua ảnh",
            "VnExpresseBox"
        ],
        link: [
            "VnExpress",
            "International"
        ],
        layout: [
            {
                icon: <i className={cx("fa-regular fa-envelope")}></i>,
                type: "Tòa soạn"
            },
            {
                icon: <i className={cx("fa-regular fa-e")}></i>,
                type: "Quảng cáo"
            },
            {
                type: "Hợp tác bản quyền"
            },
        ],
        contac: [
            {
                numb: "083.888.0123",
                Tp: "(Hà Nội)"
            },
            {
                numb: "082.233.3555",
                Tp: "(TP. Hồ Chí Minh)"
            },
        ]
    }
]


function Footer() {
    return (
        <div>
            <div className={cx("Wraper")} style={{ width: "100%" }}>
                {apiFooter.map((obj, index) => {
                    return (
                        <div key={index} className={cx("row", "wraprer_Footer")}>
                            <ul key={index} className={cx("Footer_Paren")}>
                                {obj.option.map((arr, index) => {
                                    return (
                                        <li key={index} className={cx("item_footer_option")}>
                                            <a href="/" >{arr}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul key={index} className={cx("", "inclue_Footer")} style={{ paddingLeft: 0 }}>
                                {obj.selection.map((arr, index) => {
                                    return (
                                        <li key={index} className={cx("item_footer")}>
                                            <a href="/" >{arr}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul key={index} className={cx("", "inclue_Footer")} style={{ paddingLeft: 0 }}>
                                {obj.trend.map((arr, index) => {
                                    return (
                                        <li key={index} className={cx("item_footer")}>
                                            <a href="/" >{arr}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul key={index} className={cx("", "inclue_Footer")} style={{ paddingLeft: 0 }}>
                                {obj.News.map((arr, index) => {
                                    return (
                                        <li key={index} className={cx("item_footer")}>
                                            <a href="/" >{arr}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul key={index} className={cx("", "inclue_Footer")}>
                                {obj.child.map((arr, index) => {
                                    return (
                                        <li key={index} className={cx("item_footer")}>
                                            <a href="/" >{arr}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className={cx("col")}>
                                <p className={cx("layb")}>Tải ứng dụng</p>
                                <div>
                                    {obj.link.map((arr, index) => {
                                        return (
                                            <button key={index} type="button" className={cx("btn btn-secondary ", "btn-custum")}>{arr}</button>
                                        )
                                    })}
                                </div>
                                <p className={cx("layb")}>Liên hệ</p>
                                <div className={cx("Wrap_address", "row")}>
                                    {obj.layout.map((arr, index) => {
                                        return (
                                            <div className={cx("box_address", "")} key={index}>
                                                <p href="/" className={cx("icon_address")}>{arr.icon}</p>
                                                <a className={cx("type_address")}>{arr.type}</a>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className={cx("layb")}>Đường dây nóng</p>
                                <div className={cx("wrap_contac")}>
                                    {obj.contac.map((arr, index) => {
                                        return (
                                            <div key={index}>
                                                <h4 className={cx("contac_numb")}>{arr.numb}</h4>
                                                <p className={cx("address_contac")}>{arr.Tp}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className={cx("interact_wrap")}>
                <div className={cx("interact_left")}>
                    <p className={cx("interact_text_left")}>Báo điện tử</p>
                    
                        <img className={cx("interact_icon")} src="https://s1.vnecdn.net/vnexpress/restruct/i/v757/v2_2019/pc/graphics/logo.svg" alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                    
                </div>
                <div className={cx("interact_right")}>
                    <a href="/" className={cx("interact_link")}>RSS</a>
                    <p >Theo dõi VnExpress trên</p>
                    <i className={cx("fa-brands fa-facebook")}></i>
                    <i className={cx("fa-brands fa-twitter")}></i>
                    <i className={cx("fa-brands fa-youtube")}></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;