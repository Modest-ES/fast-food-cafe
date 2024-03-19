
// Категория товаров основной страницы

import React from 'react';
import { ThemeContext } from '../App.js';
import FoodItem from '../components/FoodItem.jsx';

import styles from './ItemCategory.module.scss';

export default function ItemCategory ({objCategory}) {
    const {darkMode} = React.useContext(ThemeContext);
    return(
        <section key={objCategory.categoryId}>
            <h2 className={darkMode ? styles.dark : ""} id={objCategory.categoryTag}>{objCategory.categoryTitle}</h2>
            <div className={styles.food_section}>
                {objCategory.itemsList.map((obj) => (
                    <FoodItem
                        key={obj.id}
                        {...obj}
                    />
                ))}
            </div>
        </section>
    );
}