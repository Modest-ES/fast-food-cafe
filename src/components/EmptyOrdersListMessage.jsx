// Сообщение при отсутствии заказов в списке заказов
export default function EmptyOrdersListMessage() {
    return (
        <div className="empty-orders-message">
            <h1>Пусто</h1>
            <div className="centered-block">
                <b>Здесь отобразится информация о сделанных Вами заказах</b>
            </div>
        </div>
    );
  }
  