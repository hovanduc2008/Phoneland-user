import classNames from 'classnames/bind';

import AuthForm from '~/components/AuthForm';
import styles from './Login.module.scss';
import FormInput from '~/components/AuthForm/FormInput';
import CheckInput from '~/components/AuthForm/CheckInput';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Login() {
    return (
        <AuthForm title="Đăng Nhập" img="https://shopdunk.com/images/uploaded/banner/VNU_M492_08%201.jpeg">
            <div className={cx('wrapper')}>
                <FormInput type="text" label="Username" />
                <FormInput type="password" label="Password" />
            </div>
            <div>
                <CheckInput label="Nhớ mật khẩu" type="checkbox" />
            </div>
            <div className={cx('btn')}>
                <Button primary>Đăng nhập</Button>
            </div>
            <div>
                Bạn chưa có tài khoản?
                <Link className={cx('link')} to={routes.signup}>
                    Tạo tài khoản ngay
                </Link>
            </div>
        </AuthForm>
    );
}

export default Login;
