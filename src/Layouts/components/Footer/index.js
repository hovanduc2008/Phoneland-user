import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Logo from '../Logo';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div>
                <div className={'logo'}>
                    <Logo />
                </div>
                <p>
                    Năm 2023, Nhóm 6 của chúng đã trở thành nhóm có số điểm cao nhất. Chúng tôi phát triển chuỗi cửa
                    hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của
                    Apple cho người dùng Việt Nam.
                </p>
            </div>
            <div className={cx('intro')}>
                <h4>Giảng Viên HD: Phạm Thế Anh</h4>
                <p>
                    Đây là giảng
                </p>
            </div>
            <div className={cx('member')}>
                <h3>Thành Viên Nhóm: </h3>
                <p>Hồ Văn Đức - 2021608034</p>
                <p>Phan Tiến Mạnh - 2020601701</p>
                <p>Nguyễn Thị Hòa - 2019603014</p>
            </div>
        </footer>
    );
}

export default Footer;
