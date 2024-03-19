// Сообщение при отсутствии заказов в списке заказов

import React from 'react';
import { ThemeContext } from "../App";

import styles from './Message.module.scss';

export default function EmptyOrdersListMessage() {
    const {darkMode} = React.useContext(ThemeContext);
    return (
        <div className={darkMode ? `${styles.message} ${styles.message_dark}` : styles.message}>
            <h1>Пусто</h1>
            <div className={styles.centered_block}>
                <b>Здесь отобразится информация о сделанных Вами заказах</b>
            </div>
        </div>
    );
  }
  