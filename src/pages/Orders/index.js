import classNames from 'classnames/bind';

import styles from './Order.module.scss';

import { getall } from '~/ultils/services/OrdersService';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

const cx = classNames.bind(styles);

function Orders() {
    const [orders, setOrders] = useState([]);
    const [active, setActive] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await getall(1, '');
            if (response.status === 'success') {
                console.log(response.data);
                setOrders(response.data);
            } else {
                setOrders([]);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {});

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <h3>Danh sách đơn hàng</h3>
                <div>
                    {orders.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    setActive(item.id);
                                }}
                                key={v4()}
                                className={cx('item')}
                                style={item.id === active ? { background: '#ccc' } : { background: '#ddd' }}
                            >
                                <p>Mã đơn: {item.id}</p>
                                <p>Ngày tạo: {item.created_at}</p>
                                <p>Tổng tiền: {item.price_total}đ</p>
                            </div>
                        );
                    })}
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
                                    <td style={{ textAlign: 'center' }}>1</td>
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
                                    <td style={{ textAlign: 'center' }}>1</td>
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
