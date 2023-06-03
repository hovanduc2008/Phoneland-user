import classNames from 'classnames/bind';

import AuthForm from '~/components/AuthForm';
import styles from './Signup.module.scss';
import FormInput from '~/components/AuthForm/FormInput';

import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Signup() {
    return (
        <AuthForm title="Đăng Ký" img="https://shopdunk.com/images/uploaded/banner/TND_M402_010%201.jpeg">
            <div className={cx('wrapper')}>
                <FormInput type="text" label="Tên, Họ: " />
                <FormInput type="text" label="Email: " />
                <FormInput type="text" label="Điện thoại: " />
                <FormInput type="text" label="Username" />
                <FormInput type="password" label="Mật khẩu: " />
                <FormInput
                    type="password"
                    label="Xác nhận mật khẩu: "
                    note="Lưu ý: Mật khẩu phải có tối thiểu 8 ký tự bao gồm chữ, số và các ký tự đặc biệt"
                />
            </div>

            <div className={cx('btn')}>
                <Button primary>Đăng ký</Button>
            </div>
            <div>
                Bạn đã có tài khoản?
                <Link className={cx('link')} to={routes.login}>
                    Đăng nhập ngay.
                </Link>
            </div>
        </AuthForm>
    );
}

export default Signup;
