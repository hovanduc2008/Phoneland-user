import classNames from 'classnames/bind';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ ...props }) {
    return (
        <div
            className={cx('wrapper')}
            onClick={() => {
                window.location.href = `/product-detail/${props.id}`;
            }}
        >
            <div className={cx('img')}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={cx('info')}>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default ProductItem;
