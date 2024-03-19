
// Шапка страницы

import React from 'react';
import Searchbar from './Searchbar.jsx';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../App.js';

import styles from './Topbar.module.scss';

export default function Topbar({onClickCart, onClickOrders}) {
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
      <header className={styles.topbar_shell}>
        <div className={styles.topbar}>
          <div className={styles.logo_section}>
            <img src={darkMode ? "./favicon_white.png" : "./favicon_light.png"} alt="Logo" />
            <div className={styles.logo_text}>
              <h3>Fast Food Cafe</h3>
              <p className={darkMode ? styles.dark : ""}>Доставка еды на дом</p>
            </div>
          </div>

          <Searchbar classNameTags={darkMode ? `${styles.search_block_dark} ${styles.search_topbar}` : `${styles.search_block} ${styles.search_topbar}`} />

          <div className={styles.cart_section}>

            <button className={darkMode ? styles.theme_switch_dark : styles.theme_switch}>
              <img src={darkMode ? "./icon_sun.png" : "./icon_moon.png"} alt={darkMode ? "Тёмн" : "Свет"} title={darkMode ? "Сменить тему на светлую" : "Сменить тему на тёмную"} onClick={toggleDarkMode}/>
            </button>

            <button className={darkMode ? styles.theme_switch_dark : styles.theme_switch} onClick={onClickOrders}>
              <img src="./icon_orders.png" alt="Список заказов" title="Список заказов"/>
            </button>

            <button className={styles.cart_button} title="Открыть корзину" onClick={onClickCart}>
              <p>{totalPrice} р.</p>
              <div className={styles.cart_button_icon}>
                <img src="./icon_shoppingcart.png" alt="Cart" />
                <p>{totalAmount}</p>
              </div>
            </button>

          </div>
        </div>
        <Searchbar classNameTags={darkMode ? `${styles.search_block_dark} ${styles.search_under_topbar}` : `${styles.search_block} ${styles.search_under_topbar}`} />
      </header>
    );
  }