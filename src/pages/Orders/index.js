import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Order.module.scss';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Orders() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <h3>Danh sách đơn hàng</h3>
                <div>
                    <div style={{ background: '#ccc' }} class={cx('item')}>
                        <p>Mã đơn: 1</p>
                        <p>Ngày tạo: 13/7/2023</p>
                        <p>Tổng tiền: 13.000.000đ</p>
                    </div>
                    <div class={cx('item')}>
                        <p>Mã đơn: 2</p>
                        <p>Ngày tạo: 20/7/2023</p>
                        <p>Tổng tiền: 15.000.000đ</p>
                    </div>
                </div>
            </div>
            <div className={cx('detail')}>
                <h3>Chi tiết đơn hàng</h3>
                <div>
                    <h4>Mã đơn: 1</h4>
                    <div className={cx('info')}>
                        <p>Người nhận: Nguyễn Văn A</p>
                        <p>Địa chỉ: ĐHCNHN</p>
                        <p>Điện thoại: 0987562776</p>
                        <p>Email: nguyena@gmail.com</p>
                        <p>Thành tiền: 18.000.000đ</p>
                    </div>
                    <div className={cx('pd-list')}>
                        <h4>Danh sách mặt hàng</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá bán</th>
                                    <th>Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            src="https://shopdunk.com/images/thumbs/0000600_iphone-se-2022_80.png"
                                            alt="n"
                                        />
                                    </td>
                                    <td>
                                        <div>
                                            <p>Iphone SE</p>
                                        </div>
                                    </td>
                                    <td>9.000.000đ</td>
                                    <td>
                                        <input value="1" style={{ textAlign: 'center' }} type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="https://shopdunk.com/images/thumbs/0008734_iphone-14-pro-128gb_80.png"
                                            alt="n"
                                        />
                                    </td>
                                    <td>
                                        <div>
                                            <p>Iphone SE</p>
                                        </div>
                                    </td>
                                    <td>9.000.000đ</td>
                                    <td>
                                        <input value="1" style={{ textAlign: 'center' }} type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
