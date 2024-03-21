
// Карточка товара внутри корзины

import React from 'react';
import { useDispatch } from "react-redux";
import { addItem, minusItem, deleteItem } from "../redux/slices/cartSlice";
import { ThemeContext } from "../App";

import styles from './CartItem.module.scss';

import icon_cross from "../assets/icons/icon_cross.png";
import icon_plus from "../assets/icons/icon_itemplus.png";
import icon_minus from "../assets/icons/icon_itemminus.png";

export default function CartItem({id, title, price, option, count, imgsrc}) {
    const {darkMode} = React.useContext(ThemeContext);
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
        <div className={darkMode ? `${styles.cart_item} ${styles.cart_item_dark}` : styles.cart_item}>
            <img src={imgsrc} alt="pizza" title="pizza" className={styles.cart_item_img} />
            <div className={styles.cart_item_info}>
                <div className={styles.cart_item_upper_side}>
                    <div className={styles.cart_item_title_block}>
                        <h4>{title}</h4>
                        <p>{option}</p>
                    </div>
                    <button className={styles.cart_btn_delete}>
                        <img src={icon_cross} alt="Удалить товар" title="Удалить товар" onClick={onClickDelete}/>
                    </button>
                </div>
                <div className={styles.cart_item_lower_side}>
                    <div className={styles.amount_options}>
                        <button>
                            <img src={icon_minus} alt="less" onClick={onClickMinus}/>
                        </button>
                        <p>{count}</p>
                        <button>
                            <img src={icon_plus} alt="more" onClick={onClickPlus}/>
                        </button>
                    </div>
                    <b>{price * count} руб.</b>
                </div>
            </div>
        </div>
    );
  }
  