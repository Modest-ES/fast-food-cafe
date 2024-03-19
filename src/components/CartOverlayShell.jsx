
// Корзина и её обёртка

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice.js';
import { ThemeContext } from '../App.js';
import axios from 'axios';

import styles from './CartOverlayShell.module.scss';

import CartItem from "./CartItem.jsx";
import EmptyCartMessage from "./EmptyCartMessage.jsx";
import OrderCompleteMessage from './OrderCompleteMessage.jsx';

export default function CartOverlayShell({onClickBtnBack}) {
    const dispatch = useDispatch();
    const {darkMode} = React.useContext(ThemeContext);
    const {totalPrice, totalAmount, items} = useSelector((state) => state.cart);
    const [orderId, setOrderId] = React.useState(12);
    const [orderComplete, setOrderComplete] = React.useState(false);

    const onClickClear = () => {
        dispatch(clearCart());
    }

    const onClickOrder = async () => {
        try {
            const { data } = await axios.post(`https://65d8c66cc96fbb24c1bc47d2.mockapi.io/orders`, {
                items: items,
                totalPrice: totalPrice,
            });
            setOrderId(data.id);
            dispatch(clearCart());
            setOrderComplete(true);
        }
        catch (error) {
            alert("Ошибка при отправке заказа на сервер");
        }
    }

    return(
        <div className={styles.cart_overlay_shell}>
            <button className={styles.cart_overlay_shadow} onClick={onClickBtnBack}></button>
            <div className={darkMode ? `${styles.cart_overlay_dark} ${styles.cart_overlay}` : styles.cart_overlay}>
                <div className={styles.cart_title}>
                    <div className={styles.cart_title_row}>
                        <button className={styles.btn_back} onClick={onClickBtnBack}>
                            <img width={44} height={44} src="./icon_leftarrow.png" alt="Back button" title="Вернуться" />
                        </button>
                    </div>
                    <h3>Корзина</h3>
                    <button>
                        <img src='./icon_clear.png' alt="clear" title="Очистить корзину" className={styles.btn_clear_cart} onClick={onClickClear}/>
                    </button>
                </div>

                {items.length === 0 && !orderComplete && <EmptyCartMessage />}

                {orderComplete && <OrderCompleteMessage orderId={orderId}/>}

                <div className={styles.cart_content}>
                    {
                        items.map((item) => (
                            <CartItem key={[item.id,item.option]} {...item} />
                        )) 
                    }
                </div>
          
                {
                    totalAmount > 0 &&
                    <div className={styles.cart_bottom}>
                        <div className={styles.cart_total}>
                            <b>Итого ({totalAmount} ед.): </b>
                            <div className={styles.dashline}></div>
                            <b>{totalPrice} руб.</b>
                        </div>
                        <button className={styles.cart_btn_order} onClick={onClickOrder}>
                            <h2>Оформить заказ</h2>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}