
// Список заказов и его обёртка

import React from 'react';
import axios from 'axios';

import { ThemeContext } from '../App.js';
import OrderItem from "./OrderItem.jsx";
import EmptyOrdersListMessage from "./EmptyOrdersListMessage.jsx";

import styles from './OrdersOverlayShell.module.scss';

export default function OrdersOverlayShell({onClickBtnBack}) {
    const {darkMode} = React.useContext(ThemeContext); // включена или нет темная тема
    const [ordersList, setOrdersList] = React.useState([]); // список заказов
    const [contentIsLoading, setContentIsLoading] = React.useState(true); // статус состояния загрузки информации с бэкенда (загружается / нет)

    // Реализация запроса данных с бэкенда
    React.useEffect(() => {
        setTimeout(() => {
          axios.get(`https://65d8c66cc96fbb24c1bc47d2.mockapi.io/orders`).then((response) => {
            setOrdersList(response.data);
            setContentIsLoading(false);
          });
        }, 1);
      }, []);

    return(
        <div className={styles.orders_overlay_shell}>
            <button className={styles.orders_overlay_shadow} onClick={onClickBtnBack}></button>
            <div className={darkMode ? styles.orders_overlay_dark : styles.orders_overlay}>
                <div className={styles.orders_title}>
                    <h3>Список заказов</h3>
                    <div className={styles.orders_title_row}>
                        <button className={styles.btn_back} onClick={onClickBtnBack}>
                            <img width={44} height={44} src="./icon_rightarrow.png" alt="Back button" title="Вернуться" />
                        </button>
                    </div>
                </div>

                {contentIsLoading ? <h3 style={darkMode ? {color: "white"} : {color: "black"}}>Загрузка...</h3> : 
                <>
                    {ordersList.length === 0 && <EmptyOrdersListMessage />}

                    <div className={styles.orders_content}>
                        {
                            ordersList.reverse().map((item) => (
                                <OrderItem key={item.id} {...item} />
                            )) 
                        }
                    </div>
                </>}
                
            </div>
        </div>
    );
}