// Сообщение при отсутствии заказов в списке заказов
export default function OrderCompleteMessage({orderId}) {
    return (
        <div className="empty-cart-message">
            <h1>
            <img width={39} height={39} src="./icon_tick.png" alt="Успешно"/>
                Успешно!
            </h1>
            <div className="centered-block">
                <b>Заказ №{orderId} отправлен на сервер</b>
            </div>
        </div>
    );
  }
  