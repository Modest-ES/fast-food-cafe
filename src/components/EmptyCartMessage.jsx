
// Сообщение при отсутствии товаров в корзине

import React from 'react';
import { ThemeContext } from "../App";

import styles from './Message.module.scss';

export default function EmptyCartMessage() {
    const {darkMode} = React.useContext(ThemeContext);
    return (
        <div className={darkMode ? `${styles.message} ${styles.message_dark}` : styles.message}>
            <h1>Пусто</h1>
            <div className={styles.centered_block}>
                <b>Добавьте в корзину с помощью кнопки:</b>
            </div>
            <div className={styles.centered_block}>
                <p>Выбрать</p>
            </div>
        </div>
    );
  }
  