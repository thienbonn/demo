import styles from "./Main.module.scss"
import classNames from "classnames/bind";
import Footer from "../Footer";
import { getData } from "../../../action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
// import reducerMain from "../../../reducer/reducerMain";
import { articlesNew } from "../../../action";


const api = [
    {
        title: "Tìm thấy thi thể thứ tư vụ rơi trực thăng",
        thumr: "https://i1-vnexpress.vnecdn.net/2023/04/06/timthay-1680748603-9539-1680748821.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=2ZXIQTNLey5x0kV2xGdbfg",
        content: "Thi thể nữ du khách được tìm thấy trong xác chiếc trực thăng rơi ở vùng biển giáp ranh giữa Quảng Ninh và Hải Phòng, sáng 6/4.",
    },
    {
        title: "Thủ tướng yêu cầu gỡ khó quy định phòng cháy chữa cháy",
        thumr: "https://i1-kinhdoanh.vnecdn.net/2023/04/06/233a61201677647048168049509367-9386-7966-1680744593.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=gLuqr-YQYBoY5yGj83fF4w",
        content: "Bộ Công an, Xây dựng sẽ rà soát quy định phòng cháy chữa cháy để sửa đổi, đồng thời giảm mạnh thủ tục hành chính theo yêu cầu của Thủ tướng."
    },
    {
        title: "Dừng tour bay ngắm cảnh bằng trực thăng",
        thumr: "https://i1-dulich.vnecdn.net/2023/04/06/1-1680750073-2932-1680750091.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=eIAd2xl3egd7E-N1-yDZqg",
        content: "Các tour bay ngắm cảnh bằng trực thăng ở Việt Nam dừng đến khi có thông báo mới.  "
    },
    {
        title: "Rủi ro khi Thụy Điển bị chặn cửa vào NATO",
        thumr: "https://i1-vnexpress.vnecdn.net/2023/04/05/2022-10-20t081524z-556772429-r-8419-5889-1680688609.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=EpuNTuFnvMgQgzMH2YyFIg",
        content: "Nỗ lực gia nhập NATO bị đình trệ trong thời gian dài có thể khiến Thụy Điển dễ bị tổn thương và gây ra nhiều rủi ro với liên minh."
    },
    {
        title: "Truyền thông Malaysia bi quan khi cùng bảng Việt Nam, Thái Lan",
        thumr: "https://i1-thethao.vnecdn.net/2023/04/06/linh-10-jpeg-1652972916-1496-1-9261-9019-1680756814.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=qugZIGKYGr2jXy6Efc-aWQ",
        content: "Nhiều kênh truyền thông Malaysia lo lắng khi đội nhà vào \"bảng tử thần\" của môn bóng đá nam SEA Games 32."
    },
    {
        title: "Chủ tịch UBND Hội An: 'Không thu phí là bất công với phố cổ'",
        thumr: "https://i1-vnexpress.vnecdn.net/2023/04/06/338744279480509410867902563475-5340-8401-1680741378.png?w=220&h=132&q=100&dpr=1&fit=crop&s=9VEM6Q0aZer6HNe3gILT5A",
        content: "QUẢNG NAMGiá vé hiện thấp, không đủ trùng tu di tích, ông Nguyễn Văn Sơn, Chủ tịch UBND Hội An nói, du khách cần san sẻ trách nhiệm bằng cách trả phí."
    },
    {
        title: "Ông Zelensky ám chỉ khả năng Ukraine rút khỏi Bakhmut",
        thumr: "https://i1-vnexpress.vnecdn.net/2023/04/06/zelensky19-1680738938-4324-1680739535.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=a9ujLfqhmvs7erxic1w-Ag",
        content: "Ông Zelensky nói quân đội Ukraine sẽ ra quyết định phù hợp, ám chỉ khả năng rút quân, nếu binh sĩ có nguy cơ bị Nga bao vây tại Bakhmut."
    },
    {
        title: "",
        thumr2: "https://s1.vnecdn.net/vnexpress/restruct/i/v757/v2_2019/pc/graphics/Nga-Ukraine-Pc.jpg",
        content: ""
    },
    {
        title: "Chủ tiệm tạp hóa bị kẻ lạ mặt đổ sơn lên đầu",
        thumr: "https://i1-vnexpress.vnecdn.net/2023/04/05/ezgifcomvideotogif1-1680704636-1650-1680704675.gif?w=220&h=132&q=100&dpr=1&fit=crop&s=i3Cozdpe7kS4O5uDKParPA&t=video",
        content: "HẢI PHÒNGThanh niên đeo khẩu trang, cầm túi đựng sơn vào tiệm tạp hóa vờ hỏi mua thuốc lá rồi bất ngờ đổ ụp sơn lên đầu chủ cửa hàng lúc rạng sáng. "
    },
    {
        title: "Cao tốc Bến Lức - Long Thành giảm vốn hơn 1.200 tỷ đồng",
        thumr: "https://i1-vnexpress.vnecdn.net/2023/04/05/005copy16781816487098168016861-8367-6655-1680707171.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=cc1cFG5DVtc4LdBx9Csh_g",
        content: "Vốn đầu tư cao tốc dài 58 km, nối Long An - TP HCM - Đồng Nai còn 30.073 tỷ đồng, giảm 1.247 tỷ sau khi cập nhật khối lượng công việc còn lại của dự án. "
    },
    {
        title: "Nội dung bẩn, khiêu dâm tràn lan TikTok",
        thumr: "https://i1-sohoa.vnecdn.net/2023/04/06/tiktok-hohang-5878-1680754458.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=Ov6EaI3_-KTeIAt8x8cfaw",
        content: "Hơn một nửa số người tham gia khảo sát trên VnExpress nói thường xuyên gặp nội dung độc hại trên nền tảng TikTok."
    },
]

const apiRight = [
    {
        id: 1,
        img: "https://i1-thethao.vnecdn.net/2023/04/24/quang-ha-i-jpeg-1682303517-4361-1682303636.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=UeD_Jo1SMBEP7g5ZWMachA",
        option: [
            "Thể thao",
            "Bóng đá",
            "Tennis",
            "Marathon",
            "Lịch thi đấu"
        ],
        title:
            [
                {
                    "titleChild": "Võ sĩ Nguyễn Thị Tâm muốn đoạt HC vàng SEA Games thứ ba liên tiếp",
                    "containerChild": "Do chủ nhà Campuchia không tổ chức các hạng 50, 51kg, Nguyễn Thị Tâm phải lên thi đấu ở hạng 54kg ... "
                }
            ],
        search:
            [
                {
                    "searchChild": "Võ sĩ Việt Nam sắp so găng cao thủ Trung Quốc"
                },
                {
                    "searchChild": "HLV Vũ Tiến Thành bị phạt vì phát ngôn"
                },
                {
                    "searchChild": "Man City có 58% khả năng vô địch Ngoại hạng Anh"
                }
            ]
    },
    {
        id: 2,
        img: "https://i1-thethao.vnecdn.net/2023/04/26/girona-jpeg-1682450713-7266-1682450730.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=nmA8s9qo1wJpUgnzxV9gug",
        option: ["Kinh doanh",
            "Quốc tế",
            "Doanh nghiệp",
            "Chứng khoán",
            "Bất động sản",
            "Hậu trường kinh doanh"
        ],
        title:
            [
                {
                    "titleChild": "Ông Trương Gia Bình: FPT có cơ hội lớn từ sự bùng nổ ôtô điện",
                    "containerChild": "Công nghệ xe điện là một thế mạnh trong chuyển đổi số của FPT, nhờ lịch sử của tập đoàn đi lên từ việc ... "
                }
            ],
        search:
            [
                {
                    "searchChild": "Hãng tài chính Australia: Vốn ngoại tăng tốc vào Việt Nam"
                },
                {
                    "searchChild": "Vẫn mất nhiều thời gian để được cấp phép lao động nước ngoài"
                },
                {
                    "searchChild": "Phó thủ tướng Nga: Việt Nam là đối tác quan trọng hàng đầu Đông Nam Á"
                }
            ]
    },
    {
        id: 3,
        img: "https://i1-vnexpress.vnecdn.net/2023/04/24/untitled-1682303210-6616-1682303953.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=p5oJh--ZM6Ko42Lji_SzwA",
        option: [
            "Giải trí",
            "Giới sao",
            "PhimNhạc",
            "Thời trang",
            "Sách"
        ],
        title:
            [
                {
                    "titleChild": "Chuyện tình đồng giới của diễn viên 'Thần điêu đại hiệp'",
                    "containerChild": "HONG KONGQuan Cúc Anh, đóng \"Thần điêu đại hiệp\" 1983, từng che giấu mối tình đồng giới nhưng sau ... "
                }
            ],
        search:
            [
                {
                    "searchChild": "Công nương Kate phá cách khi sơn móng màu đỏ"
                },
                {
                    "searchChild": "Trần Mạnh Tuấn thổi saxophone tưởng nhớ Trịnh Công Sơn"
                },
                {
                    "searchChild": "Phim về game 'Mario' lập kỷ lục doanh thu mở màn"
                }
            ]
    },
    {
        id: 4,
        img: "https://i1-kinhdoanh.vnecdn.net/2023/04/24/dsc-2438-1682270987-1969-1682271039.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=jXuDUEVoKUD14d5z1y6aXw",
        option: [
            "Sức khỏe",
            "Tin tức",
            "Dinh dưỡng",
            "Khỏe đẹp",
            "Các bệnh",
            "Vaccine",
            "Di chứng Covid"

        ],
        title:
            [
                {
                    "titleChild": "Nhiễm khuẩn uốn ván từ vết thương nhỏ ở chân",
                    "containerChild": "BẮC GIANG10 ngày sau khi bị dây thép trên chiếc dép cọ vào mu bàn chân chảy máu, người đàn ông 49 tuổi co cứng cổ, khó nói.  "
                }
            ],
        search:
            [
                {
                    "searchChild": "Ăn nhiều đường có thể khiến não phát triển bất thường"
                },
                {
                    "searchChild": "Uống nước ấm giúp thanh lọc phổi?"
                },
                {
                    "searchChild": "Phát hiện ung thư da từ nốt ruồi trên mi mắt"
                }
            ]
    },
    {
        id: 5,
        img: "https://i1-vnexpress.vnecdn.net/2023/04/23/toyotawigovne-1682246022-16822-6496-2730-1682246494.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Hlhroihr5embxrItE9UwjA",
        option: [
            "Đời sống",
            "Bài học sống",
            "Tổ ấm",
            "Nhà",
            "Tiêu dùng",
            "Cooking"

        ],
        title:
            [
                {
                    "titleChild": "Con trai nặng mùi ở tuổi dậy thì",
                    "containerChild": "Bước vào tuổi dậy thì, mùi cơ thể của con trai tôi đậm hơn rất nhiều. Quần áo thay ra phải giặt nước nóng, ngâm xả mới hết mùi. Làm ... "
                }
            ],
        search:
            [
                {
                    "searchChild": "Vượt định kiến 'đẻ ba con trai'"
                },
                {
                    "searchChild": "Cậu bé ung thư xin tiền làm sinh nhật cho anh"
                },
                {
                    "searchChild": "4 yếu tố làm giảm ham muốn tình dục của phụ nữ"
                }
            ]
    },
    {
        id: 6,
        img: "https://i1-vnexpress.vnecdn.net/2023/04/23/7-1682250947-1682254703.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=fYzl931vIi4DQugLNmPNvQ",
        option: [
            "Giáo dục",
            "Tin tức",
            "Tuyển sinh",
            "Chân dung",
            "Du học",
            "Giáo dục 4.0",
            "Trắc nghiệm"

        ],
        title:
            [
                {
                    "titleChild": "Nam sinh tốt nghiệp sớm vì ước nguyện của người mẹ ung thư",
                    "containerChild": "Sợ mẹ không còn nhiều thời gian để thấy mình trong bộ đồ tốt nghiệp, Phạm Thanh Hồng Lễ quyết tâm học ... "
                }
            ],
        search:
            [
                {
                    "searchChild": "Hỗn loạn tại cuộc họp giữa Apax Leaders và phụ huynh"
                },
                {
                    "searchChild": "Sinh viên Kiến trúc khởi nghiệp với tranh mosaic"
                },
                {
                    "searchChild": "Trung Quốc xây dựng 10.000 ngành học trọng điểm"
                }
            ]
    },

]
const apiChild = [
    {

        option: [
            "Podcasts",
            "VnExpress",
            "hôm nay",
            "Tiền làm gì?",
            "Tài chính cá nhân",
            "Giải mã",
            "Thầm thì"
        ],
        new: [
            {
                imge: "https://i1-vnexpress.vnecdn.net/2023/04/07/giau-nhanh-chac-chan-se-mat-nhanh-1680861851.jpg?w=160&h=160&q=100&dpr=2&fit=crop&s=_neLYD8MClbstmRD5Jes1Q",
                title: "'Làm giàu nhanh đi kèm rủi ro mất tiền lớn'",
                content: "Tìm mọi kênh cho lãi suất cao để \"giàu nhanh\" nhưng bỏ quên rủi ro đi kèm, chuyên gia Nguyễn Tuấn Anh nói đây là sai lầm khiến mình kiếm được hàng chục tỷ nhưng cũng \"về mo\" trong vài năm. "
            },
            {
                imge: "https://i1-vnexpress.vnecdn.net/2023/04/09/goi-120-nghin-ty-chua-du-de-phat-trien-nha-o-xa-hoi-1681036624.jpg?w=160&h=160&q=100&dpr=2&fit=crop&s=7I2yp2-AtFMKT5mmI0rchw",
                title: "Doanh nghiệp: 'Gói 120 nghìn tỷ chưa đủ tạo cú hích cho nhà ở xã hội'",
                content: "Ông Nguyễn Anh Trang, Tổng giám đốc Hoàng Quân Bình Thuận, nói gói vay ưu đãi 120 nghìn tỷ chưa đủ hấp dẫn với doanh nghiệp, nhiều vướng mắc khác như quỹ đất, thủ tục vẫn chưa được giải quyết."
            }
        ],
        type: [
            {
                title: " Điểm tin 11h: NATO sắp diễn tập không quân lớn nhất lịch sử; Chủ tịch nước thăm Lào",
                content: "Hàn Quốc phản hồi thông tin bị Mỹ gây áp lực hỗ trợ Ukraine; Hoàng gia Anh tiết lộ kế hoạch lễ đăng quang của Vua Charles III... "
            },
            {
                title: "Hối hận vì bỏ việc cố định làm freelancer",
                content: "Cảm thấy gò bó bởi nhiều năm làm công việc cố định, Ngọc Lan xin nghỉ sang làm freelancer với thu nhập gấp 3 nhưng sau một năm, cô nộp đơn xin quay lại văn phòng."
            },
            {
                title: " Kiệt sức với áp lực phải giỏi",
                content: "Bị quản lý mắng mỏ, công việc không suôn sẻ, luôn chậm chạp hơn và không thể hòa đồng với bạn bè, tôi bỗng cảm thấy chán ngành học mà mình đã nỗ lực suốt 4 năm. "
            },
        ]
    },

]


function Main(props) {
    const cx = classNames.bind(styles)

    const [arrCurr, setArrCurr] = useState([])
    const [renderNew, setRenderNew] = useState([])
    const [data, setData] = useState([])
    const [isRenderView, setIsRenderView] = useState(false)
    const [isSetArrCurrent, setIsSetArrCurrent] = useState(false)

    console.log('RenderNEw1',renderNew)

    const state = useSelector(state => state.reducerHome)
    const ditpatch = useDispatch();

    // console.log('arrCurr', arrCurr)

    //     const [get, setGet] = useState([]);
    //     // const [test, dispatch] = useReducer(reducerMain, [])
    //     const data = useSelector(data => data.reducerMain)
    //     const dispatch = useDispatch()

    //     useEffect(() => {
    //         if (props.data) {
    //             axios.get(props.data)
    //                 .then(response => {
    //                     console.log("data", response.data)
    //                     setGet(response.data);
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                 })
    //                 .finally(() => {

    //                 })
    //         }
    //     }, [props.data]);

    //     useEffect(() => {
    //         if(get){
    //             dispatch(getData(get))
    //         }
    //     }, [get]);
    //  console.log("new",apiRight)
    const getArticles = () => {
        axios.get('http://localhost:8080/GET_articles')
            .then(response => {
                console.log('respon',response.data)
                // setArrCurr(
                //     response.data.map((item, index) => {
                //         return {
                //             type: item.type,
                //             customnew:
                //                 [
                //                     {
                //                         containerChild: item.content,
                //                         titleChild: item.title,
                //                     },
                //                 ],
                //             id: index,
                //         }
                //     })
                // )
                const testA = response.data.map((item, index) => {
                            return {
                                type: item.type,
                                customnew:
                                    [
                                        {
                                            containerChild: item.content,
                                            titleChild: item.title,
                                        },
                                    ],
                                id: index,
                            }
                        })
                setIsSetArrCurrent(true)
                setArrCurr(testA)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    useEffect(() => {
        getArticles()
    }, []);
    useEffect(() => {
        if (isSetArrCurrent) {
            const render = apiRight.map((item, index) => {
                console.log('item',arrCurr[index])
                console.log('title',)
                return {
                    img: item.img,
                    option: item.option,
                    search: item.search,
                    id: item.id,
                    title: [ arrCurr[index]?.customnew[0],...item.title],
                }
            })
            console.log("ssssssss::",render)
            ditpatch(articlesNew(render))
            setRenderNew(render)
            setIsRenderView(true)
        }
    }, [arrCurr]);

    return (
        <div className={cx("Wrapper_main")}>
            <div className={cx("row", "row_wrapper")}>
                <div className={cx("col-5", "red")}>
                    <div className={cx("row", "row_new")}>
                        {api.map((arr, index) => {
                            return (
                                <div className={cx("wrapper_main_child")} key={index}>
                                    <div className={cx("col-12", "main")}>
                                        <div className={cx("testtt")}>
                                            <p className={cx("Wrapper_title")}>
                                                <a href="/pageOne" className={cx("title-child")}>{arr.title}</a>
                                            </p>
                                            <div className={cx("wrapper_container_child")}>
                                                {arr.thumr2 ? <a href="/pageTwo"><img src={arr.thumr2} className={cx("Thumr_img2")} /></a> : <a href="/pageTwo"><img src={arr.thumr} className={cx("Thumr_img")} /></a>}
                                                <p className={cx("title_container_child")}>
                                                    <a href="/" className={cx("Thumr_content")}>{arr.content}</a>
                                                    {arr.thumr2 ? <i></i> : <i className={cx("fa-regular fa-message", "iconMess")}></i>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={cx("col-7", "blue")}>
                    {isRenderView && renderNew.map((arrr, index) => {
                        return (
                            <div className={cx("wrapper_col", "wrap_Paren")} key={index}>
                                <ul key={index} className={cx("wrapper_border")}>
                                    {arrr.option.map((arrcr, index) => {
                                        return <li className={cx("Option_type")} key={index}><a href="/" className={cx("liii")} >{arrcr}</a></li>
                                    })}
                                </ul>
                                <div className={cx("row", "row_container")}>
                                    <div className={cx("col-4", "Wrapper_row")}>
                                        <img src={arrr.img} className={cx("imgg")}></img>
                                    </div>
                                    {arrr.title?.map((curr, index) => {
                                        return (
                                            <div className={cx("col-4", "Wrapper_row")} key={index}>
                                                <div>
                                                    <a href={"page" + "/" + arrr.id} className={cx("title_New")}>{curr.titleChild}</a>
                                                </div>
                                                <p>
                                                    <a href="/" className={cx("Container_new")}>{curr.containerChild}</a>
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={cx("row", "wrapper_footer_parent")}>
                                    {arrr.search.map((arr, index) => {
                                        return (
                                            <ul className={cx("col-4", "Wrapper_Footer")} key={index}><li><a href="/" className={cx("footer")}>{arr.searchChild}</a></li></ul>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className={cx("wrapper_Vn")}>
                    {apiChild.map((arr, index) => {
                        return (
                            <div key={index} style={{ width: "100%" }}>
                                <ul className={cx("Head_option")}>
                                    <li >{arr.option.map((arr, index) => {
                                        // { { console.log(arr) } }
                                        return <a href="/page" className={cx("Head_a")} key={index}>{arr}</a>
                                    })}</li></ul>
                                <div className={cx("row", "row_vn")}>
                                    {arr.new.map((item, index) => {
                                        return (
                                            <div className={cx("col-6", "vn_parent")} key={index}>
                                                <div className={cx("wraper_btNew")} >
                                                    <img src={item.imge} className={cx("image_vn")} />
                                                    <div className={cx("")}>
                                                        <h3 className={cx("tag_h3")}>{item.title}</h3>
                                                        <p className={cx("tag_p")}>{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className={cx("row", "box_wraper")}>
                                        {arr.type.map((obj, index) => {
                                            return (
                                                <div className={cx("col-4", "vc_child")} key={index}>
                                                    <div>
                                                        <h3 className={cx("vc_new_child")}><i className={cx("fa-solid fa-headphones")} style={{ paddingRight: 4, paddingLeft: 4 }}></i>{obj.title}</h3>
                                                        <a href="/" className={cx("tag_p")}>{obj.content}</a>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className={cx("Wrapper_footer")}><Footer /></div>
                </div>
            </div>

        </div>
    )
}

export default Main;