import classNames from 'classnames/bind';

import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

function CheckInput({ label }) {
    return (
        <div className={cx('check')}>
            <div>
                <input type="checkbox" />
            </div>
            <div>{label}</div>
        </div>
    );
}

export default CheckInput;
