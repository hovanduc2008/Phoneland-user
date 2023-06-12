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
                    Nhóm 6 của chúng tôi đã phát triển thành công chuỗi cửa hàng tiêu chuẩn và PhoneLand nhằm mang đến
                    trải nghiệm tốt nhất về sản phẩm và dịch vụ cho người dùng tại Việt Nam. Chúng tôi đã nỗ lực hết sức
                    để đáp ứng nhu cầu và yêu cầu của khách hàng và hy vọng sẽ tiếp tục phát triển và đóng góp cho sự
                    thành công của ngành Công nghệ thông tin tại Việt Nam. Chúng tôi sẽ tiếp tục cố gắng nỗ lực hơn nữa
                    để mang đến những sản phẩm và dịch vụ tốt nhất cho khách hàng và đóng góp tích cực cho sự phát triển
                    của ngành Công nghệ thông tin tại Việt Nam.
                </p>
            </div>
            <div className={cx('intro')}>
                <h3>Giảng Viên HD: Th.S Phạm Thế Anh</h3>
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
