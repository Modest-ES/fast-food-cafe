// Сообщение при отсутствии заказов в списке заказов

import styles from './Message.module.scss';

export default function EmptyOrdersListMessage() {
    return (
        <div className={styles.message}>
            <h1>Пусто</h1>
            <div className={styles.centered_block}>
                <b>Здесь отобразится информация о сделанных Вами заказах</b>
            </div>
        </div>
    );
  }
  