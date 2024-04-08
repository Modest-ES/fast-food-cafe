
// Шапка страницы

import React from 'react';
import Searchbar from './Searchbar.jsx';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../App.js';

import styles from './Topbar.module.scss';

import logo_white from "../assets/icons/favicon_white.png";
import logo_black from "../assets/icons/favicon_light.png"
import icon_sun from "../assets/icons/icon_sun.png"
import icon_moon from "../assets/icons/icon_moon.png";
import icon_orders from "../assets/icons/icon_orders.png"
import icon_shopping_cart from "../assets/icons/icon_shoppingcart.png";

export default function Topbar({onClickCart, onClickOrders}) {
  const {totalPrice, totalAmount} = useSelector(state => state.cart);
  const {darkMode, toggleDarkMode} = React.useContext(ThemeContext);
  React.useEffect(() => {
    if(darkMode) {
      document.body.style.background = 'linear-gradient(45deg, rgb(46, 161, 23), rgb(40, 40, 40) 17%, rgb(45, 45, 45) 50%, rgb(40, 40, 40) 83%, rgb(46, 161, 23))';
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.backgroundSize = '400% 400%';
      document.body.style.animation = 'gradient 35s ease infinite';
      document.body.style.height = '100vh';
    }
    else {
      document.body.style.background = 'rgb(217, 252, 210)';
      document.body.style.background = 'linear-gradient(45deg, rgb(46, 161, 23), rgb(217, 252, 210) 17%, rgb(217, 255, 210) 50%, rgb(217, 252, 210) 83%, rgb(46, 161, 23))';
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.backgroundSize = '400% 400%';
      document.body.style.animation = 'gradient 35s ease infinite';
      document.body.style.height = '100vh';
    }
  }, [darkMode]);
  
    return (
      <header className={styles.topbar_shell}>
        <div className={styles.topbar}>
          <div className={styles.logo_section}>
            <img src={darkMode ? logo_white : logo_black} alt="Logo" />
            <div className={styles.logo_text}>
              <h3>Fast Food Cafe</h3>
              <p className={darkMode ? styles.dark : ""}>Доставка еды на дом</p>
            </div>
          </div>

          <Searchbar classNameTags={darkMode ? `${styles.search_block_dark} ${styles.search_block} ${styles.search_topbar}` : `${styles.search_block} ${styles.search_topbar}`} />

          <div className={styles.cart_section}>

            <button className={darkMode ? `${styles.theme_switch} ${styles.theme_switch_dark}` : styles.theme_switch}>
              <img src={darkMode ? icon_sun : icon_moon} alt={darkMode ? "Тёмн" : "Свет"} title={darkMode ? "Сменить тему на светлую" : "Сменить тему на тёмную"} onClick={toggleDarkMode}/>
            </button>

            <button className={darkMode ? `${styles.theme_switch} ${styles.theme_switch_dark}` : styles.theme_switch} onClick={onClickOrders}>
              <img src={icon_orders} alt="Список заказов" title="Список заказов"/>
            </button>

            <button className={styles.cart_button} title="Открыть корзину" onClick={onClickCart}>
              <p>{totalPrice} р.</p>
              <div className={styles.cart_button_icon}>
                <img src={icon_shopping_cart} alt="Cart" />
                <p>{totalAmount}</p>
              </div>
            </button>

          </div>
        </div>
        <Searchbar classNameTags={darkMode ? `${styles.search_block_dark} ${styles.search_block} ${styles.search_under_topbar}` : `${styles.search_block} ${styles.search_under_topbar}`} />
      </header>
    );
  }