
// Сообщение при отсутствии товаров в корзине

export default function EmptyCartMessage() {
    return (
        <div className="empty-cart-message">
            <h1>Пусто</h1>
            <div className="centered-block">
                <b>Добавьте в корзину с помощью кнопки:</b>
            </div>
            <div className="centered-block">
                <p>Выбрать</p>
            </div>
        </div>
    );
  }
  