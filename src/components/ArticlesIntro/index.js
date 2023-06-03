import classNames from 'classnames/bind';

import styles from './ArticlesIntro.module.scss';
import Item from './Item';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ArticlesIntro({ title, id }) {
    return (
        <div className={cx('wrapper')}>
            <h1>{title}</h1>
            <div className={cx('list')}>
                <Item
                    title="Đánh giá cấu hình iPhone 14 có mạnh như lời đồn"
                    date="29/05/2023"
                    image="https://shopdunk.com/images/thumbs/0017798_Man-hinh-Super-Retina-XDR-OLED-voi-ProMotion-120Hz-tren-iPhone-14-Pro-Max_1600.png"
                />
                <Item
                    title="Tại sao Apple Watch Series 3 phải dùng eSIM? "
                    date="19/05/2023"
                    image="https://shopdunk.com/images/thumbs/0017792_4133385_Apple_Watch_3_1600.jpeg"
                />
                <Item
                    title="Lịch sử về Apple Watch: Hành trình sứ mệnh mang đến sự thành công "
                    date="19/05/2023"
                    image="https://shopdunk.com/images/thumbs/0016330_review-ipad-pro-m2_1600.png"
                />
                <Item
                    title="iPhone 14 Plus và 13 Pro Max: “Kẻ 8 lạng, người nửa cân”"
                    date="29/05/2023"
                    image="https://shopdunk.com/images/thumbs/0017789_iPhone-13-Pro-Max-nang-hon-iPhone-14-Plus_1600.png"
                />
            </div>
            <div className={cx('all')}>
                <Button text to={`/articles/${id}`}>
                    Xem tất cả {title}
                </Button>
            </div>
        </div>
    );
}

export default ArticlesIntro;
