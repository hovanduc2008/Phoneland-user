import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ArticleDetail.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AricleDetail() {
    const { id } = useParams();
    const [active, setActive] = useState(id);

    const menu = [
        {
            id: 1,
            title: 'Tin Tức',
        },
        {
            id: 2,
            title: 'Khám Phá',
        },
        {
            id: 3,
            title: 'Review',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <aside className={cx('sidebar')}>
                {menu.map((item) => {
                    return (
                        <div
                            style={active === item.id ? { color: '#0066CC' } : {}}
                            onClick={() => {
                                setActive(item.id);
                            }}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </aside>

            <div className={cx('content')}>
                <h2>Cách ẩn ứng dụng trên iPhone tránh xâm phạm riêng tư</h2>
                <img src="https://shopdunk.com/images/thumbs/0016330_review-ipad-pro-m2_1600.png" alt="x" />
                <p>
                    Mỗi ứng dụng đều có quy định giới hạn độ tuổi đi kèm, ví dụ như Snapchat là 12+.Như vậy mình đã
                    hướng dẫn bạn cách ẩn ứng dụng trên iPhone cơ bản và cài đặt trên iPhone. Hy vọng chúng sẽ giúp ích
                    bạn nhiều trong quá trình và sử dụng sản phẩm đến từ Apple. Và đừng quên chia sẻ với bạn bè nếu thấy
                    hữu ích nhé!Như vậy, chỉ với vài bước thiết lập đơn giản mà ShopDunk chia sẻ trên đây, bạn đã có thể
                    kích hoạt tính năng ẩn ứng dụng trên hầu hết các thiết bị iPhone X, iPhone 8, 8 plus, 7, 7 plus, 6s,
                    6s plus, 6, 6 plus, 5s, 5, 4s và iPad trong tích tắc mà không cần phải sử dụng tới ứng dụng thứ ba.
                    Nói đến vấn đề bảo mật, có lẽ Apple luôn đi đầu với các tính năng mà họ đem lại. Trong số đó phải kể
                    đến tính năng bảo mật 2 lớp khá hữu ích giúp người dùng có thể giữ an toàn cho dữ liệu của họ hoặc
                    áp dụng chúng vào việc mở khóa tài khoản iCloud.Chỉ với vài bước đơn giản bạn có thể&amp;nbsp;ẩn ứng
                    dụng trên iPhone&amp;nbsp;mà không cần dùng App rồi.&amp;nbsp;Hãy thường xuyên ghé thăm trang tin
                    tức Apple&amp;nbsp;Tin tức ShopDunk&amp;nbsp;để cập nhập những tin tức mới nhất.
                </p>
            </div>
        </div>
    );
}

export default AricleDetail;
