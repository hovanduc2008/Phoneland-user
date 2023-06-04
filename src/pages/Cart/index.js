import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import styles from './Cart.module.scss';
import FormInput from '~/components/AuthForm/FormInput';
import Button from '~/components/Button';
import CartItem from './CartItem';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Cart() {
    console.log(localStorage.getItem('cartItems'));
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
                            <CartItem />
                            <CartItem />
                        </tbody>
                    </table>
                    <div className={cx('other-handel')}>
                        <Button outline>Cập nhật giỏ hàng</Button>
                        <Button outline to={routes.home}>
                            Tiếp tục mua sắm
                        </Button>
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
