import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
function CartItem() {
    const [quantity, setQuantity] = useState(1);

    return (
        <tr>
            <td>
                <img src="https://shopdunk.com/images/thumbs/0000600_iphone-se-2022_80.png" alt="n" />
            </td>
            <td>
                <div>
                    <p>Iphone SE</p>
                    <p>Dung lượng: 130GB</p>
                </div>
            </td>
            <td>9.000.000đ</td>
            <td>
                <input
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                    style={{ textAlign: 'center' }}
                    type="text"
                />
            </td>
            <td>
                <FontAwesomeIcon icon={faTrashCan} />
            </td>
        </tr>
    );
}

export default CartItem;
