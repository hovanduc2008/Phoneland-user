import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import FormInput from '~/components/AuthForm/FormInput';
import Button from '~/components/Button';
import CartItem from './CartItem';
import routes from '~/config/routes';
import { getCart, calculateTotal } from '~/ultils/session';
import styles from './Cart.module.scss';
import { v4 } from 'uuid';

const cx = classNames.bind(styles);

function Cart() {
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
    const [reloadComponent, setReloadComponent] = useState('');

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('cartItems')) || getCart());
        setTotal(calculateTotal(getCart()));
    }, [reloadComponent]);

    return (
        <div className={cx('wrapper')}>
            {items.length > 0 ? (
                <>
                    <div className={cx('left')}>
                        <div className={cx('pd-list')}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá bán</th>
                                        <th>Số lượng</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => (
                                        <CartItem
                                            key={item.product.id}
                                            item={item}
                                            onUpdateTotal={() => {
                                                setReloadComponent(v4());
                                            }}
                                            reloadComponent={reloadComponent}
                                        />
                                    ))}
                                </tbody>
                            </table>
                            <div className={cx('other-handel')}>
                                <Button
                                    outline
                                    onClick={() => {
                                        setReloadComponent(v4());
                                    }}
                                >
                                    Cập nhật giỏ hàng
                                </Button>
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
                                <p>{total}</p>
                            </div>
                            <div>
                                <Button className={cx('btn-submit')} primary>
                                    Tiến hành thanh toán
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className={cx('empty-cart')}>
                    <h3>Giỏ hàng rỗng</h3>
                </div>
            )}
        </div>
    );
}

export default Cart;
