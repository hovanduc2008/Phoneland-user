import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { v4 } from 'uuid';

import routes from '~/config/routes';
import Logo from '~/Layouts/components/Logo';
import styles from './Header.module.scss';
import Search from '~/components/SearchForm';
import { getall } from '~/ultils/services/categoriesService';
import Menu from '~/components/Menu';
import { isLogin } from '~/ultils/cookie/checkLogin';
import { deleteCookie } from '~/ultils/cookie';

const cx = classNames.bind(styles);

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [cate, setCate] = useState([]);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getall('', '');
            setCate(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (isLogin()) {
            setMenu([
                {
                    name: 'Thông tin cá nhân',
                    to: routes.profile,
                },
                {
                    name: 'Đơn hàng',
                    to: routes.orders,
                },
                {
                    name: 'Đăng xuất',
                    onClick: () => {
                        deleteCookie('login');
                        window.location.href = routes.home;
                    },
                },
            ]);
        } else {
            setMenu([
                {
                    name: 'Đăng nhập',
                    to: routes.login,
                },
                {
                    name: 'Đăng ký',
                    to: routes.signup,
                },
            ]);
        }
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('left-menu')}>
                <Logo />
                {showSearch ? (
                    <Search />
                ) : (
                    <div className={cx('menu')}>
                        {cate.map((item) => {
                            if (item.type === '0' && item.status === '1')
                                return (
                                    <p key={v4()}>
                                        <Link className={cx('link')} to={`/products/` + item.id}>
                                            {item.name}
                                        </Link>
                                    </p>
                                );
                            return null;
                        })}
                        <p>
                            <Link className={cx('link')} to={routes.articles}>
                                Bài Viết
                            </Link>
                        </p>
                    </div>
                )}
            </div>
            <div className={cx('control')}>
                <div
                    className={cx('search-btn')}
                    onClick={() => {
                        setShowSearch(!showSearch);
                    }}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className={cx('cart')}>
                    <Link to={routes.cart}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                </div>
                <div className={cx('user')}>
                    <Menu menu={menu}>
                        <FontAwesomeIcon icon={faUser} />
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
