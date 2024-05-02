import styles from "./MainNew.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import SocialNetwork from "./socialNetWork";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../action";

const cx = classNames.bind(styles)


function MainNew({ data, params }) {
    // console.log("dataMain", params)  
    const [date, setDate] = useState();
    const [change, setChange] = useState([])


    const apiContent = [
        {
            title: "Ukraine ráo riết gom quân cho kế hoạch phản công",
            content: "Quân nhân có thể xuất hiện ở bất kỳ đâu và bất kỳ lúc nào, trao giấy gọi nhập ngũ cho những người đàn ông Ukraine trong độ tuổi 18-60.\n \
            Kiev đang chuẩn bị cho một cuộc phản công lớn và cần bù đắp số thương vong trên chiến trường mà họ mô tả là \"tổn thất lớn\". Vào tháng 2, một quan chức Đức nói rằng Berlin tin ít nhất 120.000 binh sĩ Ukraine đã thiệt mạng hoặc bị thương kể từ khi bắt đầu xung đột. Do đó, Ukraine cần nhanh chóng có thêm nhiều binh sĩ.\n \
            \"Chúng tôi hiểu rằng nếu cuộc chiến kéo dài thêm năm nữa, tất cả chúng tôi sẽ phải nhập ngũ\", Sasha, 35 tuổi, người làm công việc tuyển diễn viên cho các dự án phim ảnh, nói. Anh đang tham gia khóa huấn luyện quân sự tư nhân ở thủ đô Kiev để sẵn sàng nhập ngũ khi cần.\n \
            Cuộc phản công mùa xuân sắp tới của Ukraine sẽ phụ thuộc vào cả những binh lính mới lẫn lực lượng giàu kinh nghiệm đã được huấn huyện sử dụng vũ khí phương Tây. Tốc độ và quyết tâm tuyển quân của giới chức quân sự Ukraine đang khiến nhiều chưa sẵn sàng nhập ngũ lo lắng.\n \
            Trước đây, quan chức chỉ gửi giấy gọi nhập ngũ đến nhà dân và một số tránh nhận giấy bằng cách ở địa điểm khác với nơi họ đăng ký thường trú. Tuy nhiên, quy định mới đã mở rộng phạm vi hoạt động, giới chức giờ đến gõ cửa từng nhà hoặc trao giấy gọi nhập ngũ cho những người họ gặp trên phố.\n \
            Thiết quân luật được áp dụng ở Ukraine kể từ tháng 2/2022 cấm hầu hết nam giới trong độ tuổi 18-60 rời đất nước. Theo quy định huy động quân, giới chức có thể gọi nhập ngũ bất kỳ nam giới nào trong độ tuổi đó. Các trường hợp ngoại lệ gồm sinh viên, người có ít nhất ba con dưới 18 tuổi, người phải chăm sóc thân nhân tàn tật hoặc những người không đáp ứng điều kiện sức khỏe. Gần 1/4 triệu người Ukraine sẽ đủ 18 tuổi trong năm nay.",
            img: "https://i1-vnexpress.vnecdn.net/2023/04/11/ukraine-azov-3-2023-wp-1681186-7997-7695-1681189411.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=l7hWzFxu5UXMGUWXf8XDGQ",
            discription: "Nhóm tân binh được huấn luyện tại trường bắn của Lữ đoàn Azov ở ngoại ô Kiev ngày 24/3. Ảnh: Washington Post"
        },

        {
            content: "Quân đội Ukraine từ lâu tuyển mộ theo tinh thần tự nguyện. Nhưng giờ đây, nhiều nam giới Ukraine, ngay cả những người đang làm tình nguyện viên nhân đạo hoặc làm các công việc hỗ trợ khác, cũng không thể thoát khỏi lệnh nhập ngũ.\n \
            Oleksii Kruchukov, thợ sửa máy giặt 46 tuổi, xếp hàng chờ bên ngoài văn phòng tuyển quân ở Kiev. Anh nhận được thông báo sau khi cảnh sát giải tán một cuộc ẩu đả mà anh tham gia trên phố. Kruchukov không trong diện miễn trừ quân sự và cho rằng giới chức sẽ sớm triệu tập anh đi huấn luyện chiến đấu.\n \
            Oleksandr Kostiuk, công nhân sửa đường 52 tuổi từng giúp thiết lập rào chắn ngăn quân Nga quanh Kiev năm ngoái, gần đây nhận giấy gọi thông qua bộ phận nhân sự của cơ quan. Ông sẵn sàng ra chiến trường nếu cần, nhưng lo sợ cho an toàn của bản thân. \"Bây giờ chúng tôi hiểu rõ những gì đang diễn ra nên thấy lo lắng hơn\", ông nói.\n \
            Thay vì bị gọi nhập ngũ bất ngờ, hàng nghìn người Ukraine khác đã tự nguyện đăng ký vào \"Đội quân Tấn công\" gồm 8 lữ đoàn mới.\n \
            Họ đáp lại lời kêu gọi \"biến cơn thịnh nộ thành vũ khí\" được đăng trên các áp phích dọc những tuyến đường cao tốc ở Ukraine. Nhiều người hy vọng việc tự nguyện đăng ký sẽ giúp họ có thời gian đào tạo bài bản hơn so với khi bị gọi nhập ngũ bắt buộc. Một số thanh niên vừa bước sang tuổi 18.",
            img: "https://i1-vnexpress.vnecdn.net/2023/04/12/imrs-php-2979-1681316991.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=kvJ5dWpoNPCLW_ETJ8YZMw",
            discription: "Tình nguyện viên điền đơn xin gia nhập lữ đoàn Azov ngày 21/3. Ảnh: Washington Post"
        },
        {
            content: "Kể từ đầu tháng 2, hơn 5.000 người đã nộp đơn xin gia nhập Tiểu đoàn Azov, nhóm dân quân cánh hữu được sáp nhập vào lực lượng vệ binh quốc gia Ukraine. Năm ngoái, Tiểu đoàn Azov được ca ngợi như những người hùng ở Ukraine khi chịu đựng cuộc bao vây kéo dài nhiều tháng ở thành phố Mariupol. Trong khi đó, Nga chỉ trích tiểu đoàn này là \"phát xít\".Hồi tháng 2 năm nay, Bộ Nội vụ Ukraine thông báo rằng Tiểu đoàn Azov sẽ được mở rộng thành lữ đoàn thuộc Đội quân Tấn công mới.Theo quy định, Azov chỉ chấp nhập những người tự nguyện đăng ký và có quyền từ chối những người mà họ tin là không phù hợp. Azov đã phát động chiến dịch chiêu mộ quy mô lớn để trở thành lữ đoàn, nhiều binh sĩ từng chiến đấu ở Mariupol đang huấn luyện tân binh.Một buổi chiều gần đây ở ngoại ô Lyman, miền đông Ukraine, các lãnh đạo tuyển quân nhiều kinh nghiệm đã tỏ ra phẫn nộ về chất lượng huấn luyện ban đầu của nhóm tân binh. \"Họ chắc chỉ được dạy hát và diễu hành trong các khóa huấn luyện cơ bản\", một lãnh đạo nói. Ông cho biết nhóm tân binh cần được hướng dẫn cả những điều đơn giản nhất như đào chiến hào, vì họ không biết cách cầm xẻng, cách xây hàng phòng thủ cho chiến hào hay vị trí chiến đấu. Chỉ huy giấu tên này cũng phải dạy 4 người lính mới cách thay băng đạn súng trường trong khi chiến đấu.Một số huấn luyện viên không giữ nổi bình tĩnh. Chỉ vào người lính đang loay hoay với khẩu súng, huấn luyện viên quát lớn \"điều chỉnh lại dây đeo ngay. Anh định bắn thế nào trong khi chiếc dây bị xoắn như vậy\".Trong khi đó, tại một trại huấn luyện ở Kiev, những người lính mới của Azov xếp hàng tại một trường bắn, học cách sử dụng súng trường C7A1. Một trong những huấn luyện viên là cựu lính thủy đánh bộ Mỹ Frodo.\"Cách đây một tháng, phần lớn những người này là dân thường. Việc tự nguyện đăng ký nhập ngũ cho thấy họ giống chiến binh hơn là binh lính\", Frodo nói.Quá trình huấn luyện cơ bản ba tháng theo tiêu chuẩn của thủy quân lục chiến Mỹ giờ rút ngắn còn 4 tuần. Trong thời gian đó, những người lính học mọi thứ từ kỹ năng bắn, đọc bản đồ cho đến vô tuyến và kỹ thuật. Sau đó, họ gần như có thể được triển khai ngay tới các điểm nóng nhất trên tiền tuyến.Trong một căn lều, hàng chục người đàn ông ngồi thành hàng khi huấn luyện viên giới thiệu về các loại mìn. Bên ngoài, một nhóm khác chạy bộ trên cát, sau đó tất cả dừng lại và hút thuốc lá. Họ chỉ hút ba lần mỗi ngày và trong khi huấn luyện, họ được yêu cầu chạy trên mọi địa hình.\"Chỉ có khoảng thời gian ngắn để xây dựng kỷ luật\", Frodo nói.",
            img: "https://i1-vnexpress.vnecdn.net/2023/04/11/Kiev-WP-5024-1681189411.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=tFoneExVKhHy6PSRbRrl3w",
            discription: "Một nhóm người Ukraine tham gia khóa huấn luyện quân sự tại nhà kho ở Kiev hôm 26/3. Ảnh: Washington Post"
        },
        {
            content: "Nhiều người dân Ukraine khác đang tham gia các khóa đào tạo riêng, dù họ chưa nhận giấy gọi nhập ngũ. \"Rồi sẽ đến lượt tôi, tôi lo lắng mình chưa sẵn sàng chiếu đấu nên chọn cách học trước\", Sasha nói. Dù từng tham gia khóa học quân sự tại trường đại học, anh gần như không biết cách sử dụng vũ khí cho tới gần đây.Sasha và 8 người khác được đào tạo tại một nhà kho bỏ hoang ở Kiev. Họ chạy lên cầu thang theo nhóm hai hoặc ba người, diễn tập cảnh thăm dò khu nhà xem có quân Nga hay không.\"Tôi chạm trán quân địch rồi\", một người nói, trước khi phát hiện lựu đạn được ném từ trên cao. Tất cả họ nằm rạp xuống sàn nhà, nhưng không có gì phát nổ. Quả lựu đạn đó làm bằng nhựa và \"lính Nga\" được dựng bằng bìa cứng.\"Chẳng ai chết một cách ngu ngốc như vậy. Hãy đứng lên ngồi xuống 30 lần cho tôi\", huấn luyện viên hét lớn.Huấn luyện viên của họ là quân nhân Ukraine tại ngũ. Người này cho biết các buổi diễn tập nhằm chuẩn bị cho nỗ lực tiêu diệt những lính Nga còn sót lại sau cuộc phản công.\"Tôi có thể hạ 10 lính Nga, nhưng nếu tôi dạy cho 10 người, họ có thể hạ 100 quân Nga. Tôi đã bất ngờ khi nhận thấy động lực và năng lượng của họ. Động lực của họ chính là động lực cho tôi\", anh nói.\"Nếu sau này họ đến tiền tuyến, mục tiêu của tôi là giúp họ sống sót lâu nhất có thể\", anh nói thêm.",
        },
    ]
    useEffect(() => {
        setChange(data)
    }, [data]);

    useEffect(() => {
        const dateCurr = new Date()
        const datee = dateCurr.getDate()
        const day = dateCurr.getDay();
        const month = dateCurr.getMonth() + 1;
        const year = dateCurr.getFullYear();
        const hourn = dateCurr.getHours();
        const second = dateCurr.getMinutes();
        const mili = dateCurr.getSeconds();
        const Full = ` ${datee} / ${month} / ${year}, ${hourn} / ${second} / ${mili}`;


        setDate(pri => pri = Full);
    }, [date]);

    const state = useSelector(state => state.reducerMain)
    const dispatch = useDispatch()

    // console.log("state",state)

    return (

        <div className={cx("Wrap")}>
            <SocialNetwork />
            <div className={cx("row", "Row_Main_big")}>
                <div className={cx("col-9", "Main_content")}>
                    <p className={cx("tam", "col-12")}>{date}</p>
                    {state.map((obj, index) => {
                        return (
                            <div className={cx("col-12", `delete/${obj.id}`)} key={index}>
                                {obj.title ? <h2>{obj.title}</h2> : <></>}
                                <div>{obj.content}</div>
                                <img src={obj.img} />
                                <div>{obj.discription}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={cx("col-3")} style={{ backgroundColor: "blue", height: 44 }}>

                </div>
            </div>
        </div>
    );
}

export default MainNew;