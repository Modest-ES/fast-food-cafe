// Сообщение при отсутствии заказов в списке заказов

import styles from './Message.module.scss';

export default function OrderCompleteMessage({orderId}) {
    return (
        <div className={styles.message}>
            <h1>
            <img width={39} height={39} src="./icon_tick.png" alt="Успешно"/>
                Успешно!
            </h1>
            <div className={styles.centered_block}>
                <b>Заказ №{orderId} отправлен на сервер</b>
            </div>
        </div>
    );
  }
  