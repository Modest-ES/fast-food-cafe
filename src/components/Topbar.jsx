
// Шапка страницы

import React from 'react';
import Searchbar from './Searchbar.jsx';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../App.js';

export default function Topbar({onClickCart}) {
  const {totalPrice, totalAmount} = useSelector(state => state.cart);
  const {darkMode, toggleDarkMode} = React.useContext(ThemeContext);
  React.useEffect(() => {
    if(darkMode) {
      document.body.style.background = 'rgb(40, 40, 40)';
    }
    else {
      document.body.style.background = 'rgb(217, 252, 210)';
    }
  }, [darkMode]);
  
    return (
      <header className="topbar-shell">
        <div className="topbar">
          <div className="logo-section">
            <img src={darkMode ? "./favicon_white.png" : "./favicon_light.png"} alt="Logo" />
            <div className="logo-text">
              <h3>Fast Food Cafe</h3>
              <p className={darkMode ? 'dark' : ""}>Доставка еды на дом</p>
            </div>
          </div>

          <Searchbar classNameTags={darkMode ? "search-block-dark search-topbar" : "search-block search-topbar"} />

          <div className="cart-section">

            <button className={darkMode ? "theme-switch-dark" : 'theme-switch'}>
              <img src={darkMode ? "./icon_sun.png" : "./icon_moon.png"} alt={darkMode ? "Тёмн" : "Свет"} title={darkMode ? "Сменить тему на светлую" : "Сменить тему на тёмную"} onClick={toggleDarkMode}/>
            </button>

            <button className="cart-button" title="Shopping Cart" onClick={onClickCart}>
              <p>{totalPrice} р.</p>
              <div className="cart-button-icon">
                <img src="./icon_shoppingcart.png" alt="Cart" />
                <p>{totalAmount}</p>
              </div>
            </button>

          </div>
        </div>
        <Searchbar classNameTags={darkMode ? "search-block-dark search-under-topbar" : "search-block search-under-topbar"} />
      </header>
    );
  }