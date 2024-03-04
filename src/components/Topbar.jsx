import Searchbar from './Searchbar.jsx';
import { useSelector } from 'react-redux';

export default function Topbar({onClickCart}) {
  const {totalPrice, totalAmount} = useSelector(state => state.cart);
  
    return (
      <div className="topbar-shell">
        <div className="topbar">
          <div className="logo-section">
            <img src="./favicon_light.png" alt="Logo" />
            <div className="logo-text">
              <h3>Fast Food Cafe</h3>
              <p>Доставка еды на дом</p>
            </div>
          </div>
          <Searchbar classNameTags={"search-block search-topbar"} />
          <div className="cart-section">
            <div className="cart-button" title="Shopping Cart" onClick={onClickCart}>
              <p>{totalPrice} руб.</p>
              <div className="cart-button-icon">
                <img src="./icon_shoppingcart.png" alt="Cart" />
                <p>{totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
        <Searchbar classNameTags={"search-block search-under-topbar"} />
      </div>
    );
  }