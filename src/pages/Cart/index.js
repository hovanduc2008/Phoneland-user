import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import styles from './Cart.module.scss';
import FormInput from '~/components/AuthForm/FormInput';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('pd-list')}>
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
                                        <p>Dung lượng: 130GB</p>
                                    </div>
                                </td>
                                <td>9.000.000đ</td>
                                <td>
                                    <input value="1" style={{ textAlign: 'center' }} type="text" />
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faTrashCan} />
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
                                        <p>Dung lượng: 130GB</p>
                                    </div>
                                </td>
                                <td>9.000.000đ</td>
                                <td>
                                    <input value="1" style={{ textAlign: 'center' }} type="text" />
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={cx('other-handel')}>
                        <Button outline>Cập nhật giỏ hàng</Button>
                        <Button outline>Tiếp tục mua sắm</Button>
                    </div>
                </div>
                <h3>Thông tin thanh toán</h3>
                <div className={cx('billing-info')}>
                    <FormInput label="Họ tên" />
                    <FormInput label="Địa chỉ" />
                    <div className={cx('contact')}>
                        <FormInput label="Email" />
                        <FormInput label="Điện thoại" />
                    </div>
                    <div>
                        <label>Ghi chú: </label>
                        <textarea className={cx('note')}></textarea>
                    </div>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('sidebar-cart')}>
                    <div className={cx('sum')}>
                        <p>Tổng cộng: </p>
                        <p>23.980.000₫</p>
                    </div>
                    <div>
                        <Button className={cx('btn-submit')} primary>
                            Tiến hành thanh toán
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
