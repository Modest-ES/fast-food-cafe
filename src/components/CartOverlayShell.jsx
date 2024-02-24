import React from 'react';

export default function CartOverlayShell({onClickBtnBack}) {
    return(
        <div className="cart-overlay-shell">
            <div className="cart-overlay-shadow" onClick={onClickBtnBack}></div>
            <div className="cart-overlay">
                <div className="cart-title">
                    <div className="cart-title-row">
                        <button className="btn-back" onClick={onClickBtnBack}>
                            <img width={44} height={44} src="./icon_leftarrow.png" alt="Back button" title="Вернуться" />
                        </button>
                        <h3>Корзина</h3>
                    </div>
                {/* {items.length > 0 &&  */}
                    <button className="btn-clear-cart">
                        <h4>Очистить</h4>
                    </button>
                </div>

                {/* <div className="empty-cart-message">
                <h1>Пусто</h1>
                <div className="centered-block">
                    <b>Добавьте в корзину с помощью кнопки:</b>
                </div>
                <div className="centered-block">
                    <p>
                    Выбрать
                    </p>
                </div>
                </div> */}

                <div className='cart-content'>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/pizza_bacon.png" alt="pizza" title="pizza" className="cart-item-img" />
                            <div>
                                <h4>Пицца "Бекон"</h4>
                                <b>700 руб.</b>
                                <p>30 см</p>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/snack_fries.png" alt="snack" title="snack" className="cart-item-img" />
                            <div>
                                <h4>Картофель фри</h4>
                                <b>170 руб.</b>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/burger_bbq.png" alt="burger" title="burger" className="cart-item-img" />
                            <div>
                                <h4>Бургер "Барбекю"</h4>
                                <b>380 руб.</b>
                                <p>Острый</p>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/snack_carbonara.png" alt="snack" title="snack" className="cart-item-img" />
                            <div>
                                <h4>Паста Карбонара</h4>
                                <b>280 руб.</b>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/pizza_vegetarian.png" alt="pizza" title="pizza" className="cart-item-img" />
                            <div>
                                <h4>Пицца "Вегетарианская"</h4>
                                <b>470 руб.</b>
                                <p>25 см</p>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/dessert_redvelvetcake.png" alt="dessert" title="dessert" className="cart-item-img" />
                            <div>
                                <h4>Торт "Красный Бархат"</h4>
                                <b>165 руб.</b>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/drink_cola.png" alt="drink" title="drink" className="cart-item-img" />
                            <div>
                                <h4>Кола</h4>
                                <b>130 руб.</b>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="./htmlsrcphotos/drink_tarkhun.png" alt="drink" title="drink" className="cart-item-img" />
                            <div>
                                <h4>Тархун</h4>
                                <b>115 руб.</b>
                                <div className='amount-options'>
                                    <img src="./icon_itemminus.png" alt="less"/>
                                    <p>1</p>
                                    <img src="./icon_itemplus.png" alt="more"/>
                                </div>
                            </div>
                        </div>
                        <button className="cart-btn-delete">
                            <img src="./icon_cross.png" alt="Удалить товар" title="Удалить товар" />
                        </button>
                    </div>
                </div>

                {/* {items.length > 0 &&
                <div className="cart-content">
                {
                items.map((item) => (
                    <div className="cart-item" key={item.albumName}>
                    <div className="cart-item-info">
                        <img src={item.albumCover} alt={item.albumName} title={item.albumName} className="cart-item-cover" />
                        <div>
                        <h4>{item.albumName}</h4>
                        <b>${item.albumPrice}</b>
                        </div>
                    </div>
                    <button className="cart-btn-delete">
                        <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" onClick={() => onClickBtnDelete(item.albumName)} />
                    </button>
                    </div>
                ))
                }
                </div>}  */}
          
                <div className="cart-bottom">
                    <div className="cart-total">
                        <b>Итого:</b>
                        <div className="dashline"></div>
                        <b>12345 руб.</b>
                    </div>
                    <button className="cart-btn-order">
                        <h2>Оформить заказ</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}