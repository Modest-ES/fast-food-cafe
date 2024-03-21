// Сообщение при отсутствии заказов в списке заказов

import React from 'react';
import { ThemeContext } from "../App";

import styles from './Message.module.scss';

import icon_tick from "../assets/icons/icon_tick.png";

export default function OrderCompleteMessage({orderId}) {
    const {darkMode} = React.useContext(ThemeContext);
    return (
        <div className={darkMode ? `${styles.message} ${styles.message_dark}` : styles.message}>
            <h1>
            <img width={39} height={39} src={icon_tick} alt="Успешно"/>
                Успешно!
            </h1>
            <div className={styles.centered_block}>
                <b>Заказ №{orderId} отправлен на сервер</b>
            </div>
        </div>
    );
  }
  