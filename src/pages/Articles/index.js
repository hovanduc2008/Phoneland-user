import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import styles from './Articles.module.scss';
import ArticlesIntro from '~/components/ArticlesIntro';
import Item from '~/components/ArticlesIntro/Item';

const cx = classNames.bind(styles);

function Articles() {
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
            {id ? (
                <div className={cx('list')}>
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

                    <div className={cx('items')}>
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
                </div>
            ) : (
                <div>
                    <ArticlesIntro id="1" title="Tin Tức" />
                    <ArticlesIntro id="2" title="Khám Phá" />
                    <ArticlesIntro id="3" title="Review" />
                </div>
            )}
        </div>
    );
}

export default Articles;
