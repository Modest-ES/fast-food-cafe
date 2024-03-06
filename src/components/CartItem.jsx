
// Карточка товара внутри корзины

import { useDispatch } from "react-redux";
import { addItem, minusItem, deleteItem } from "../redux/slices/cartSlice";

export default function CartItem({id, title, price, option, count, imgsrc}) {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({id, option}),
        );
    };
    const onClickMinus = () => {
        dispatch(
            minusItem({id, option}),
        );
    };
    const onClickDelete = () => {
        dispatch(
            deleteItem({id, option}),
        );
    };
    return (
        <div className="cart-item">
            <img src={imgsrc} alt="pizza" title="pizza" className="cart-item-img" />
            <div className="cart-item-info">
                <div className="cart-item-upper-side">
                    <div className="cart-item-title-block">
                        <h4>{title}</h4>
                        <p>{option}</p>
                    </div>
                    <button className="cart-btn-delete">
                        <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" onClick={onClickDelete}/>
                    </button>
                </div>
                <div className="cart-item-lower-side">
                    <div className='amount-options'>
                        <img src="./icon_itemminus.png" alt="less" onClick={onClickMinus}/>
                        <p>{count}</p>
                        <img src="./icon_itemplus.png" alt="more" onClick={onClickPlus}/>
                    </div>
                    <b>{price * count} руб.</b>
                </div>
            </div>
        </div>
    );
  }
  