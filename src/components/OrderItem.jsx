
// Карточка заказа внутри списка заказов

import React from 'react';

import styles from './OrderItem.module.scss';

export default function OrderItem({id, items, totalPrice}) {
    
  const [orderHidden, setOrderHidden] = React.useState(true);

  const hideOrder = () => {
    setOrderHidden((prev) => !prev);
  }

    return (
        <div className={styles.orders_item}>
            <div className={styles.orders_item_info} onClick={hideOrder}>
                <h3>Заказ №{id}</h3>
                {items.map((item) => (
                        <div className={orderHidden ? styles.hidden : ""}>
                            <h4>{item.title} ({item.option})</h4>
                            {(item.count > 1) && <p>Цена: {item.price} руб.</p>}
                            <p>Количество: {item.count}</p>
                            <p>Стоимость: {item.price * item.count} руб.</p>
                        </div>   
                    )) }
                <h4>Общая стоимость: {totalPrice} руб.</h4>
            </div>
        </div>
    );
  }
  