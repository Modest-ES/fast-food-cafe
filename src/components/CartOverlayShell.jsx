
// Корзина и её обёртка

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice.js';
import { ThemeContext } from '../App.js';

import CartItem from "./CartItem.jsx";
import EmptyCartMessage from "./EmptyCartMessage.jsx";

export default function CartOverlayShell({onClickBtnBack}) {
    const dispatch = useDispatch();
    const {darkMode} = React.useContext(ThemeContext);
    const {totalPrice, totalAmount, items} = useSelector((state) => state.cart);

    const onClickClear = () => {
        dispatch(clearCart());
    }

    return(
        <div className="cart-overlay-shell">
            <button className="cart-overlay-shadow" onClick={onClickBtnBack}></button>
            <div className={darkMode ? "cart-overlay-dark" : "cart-overlay"}>
                <div className="cart-title">
                    <div className="cart-title-row">
                        <button className="btn-back" onClick={onClickBtnBack}>
                            <img width={44} height={44} src="./icon_leftarrow.png" alt="Back button" title="Вернуться" />
                        </button>
                    </div>
                    <h3>Корзина</h3>
                    <button>
                        <img src='./icon_clear.png' alt="clear" title="Очистить корзину" className="btn-clear-cart" onClick={onClickClear}/>
                    </button>
                </div>

                {items.length === 0 && <EmptyCartMessage />}

                <div className='cart-content'>
                    {
                        items.map((item) => (
                            <CartItem key={[item.id,item.option]} {...item} />
                        )) 
                    }
                </div>
          
                <div className="cart-bottom">
                    <div className="cart-total">
                        <b>Итого ({totalAmount} ед.): </b>
                        <div className="dashline"></div>
                        <b>{totalPrice} руб.</b>
                    </div>
                    <button className="cart-btn-order">
                        <h2>Оформить заказ</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}