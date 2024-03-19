
// Сообщение при отсутствии товаров в корзине

import styles from './Message.module.scss';

export default function EmptyCartMessage() {
    return (
        <div className={styles.message}>
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
  