
// Обёртка для скелетов карточек товаров

import React from 'react';
import FoodItemSkeleton from './FoodItemSkeleton.jsx';
import { ThemeContext } from '../App.js';
import styles from './SkeletonSection.module.scss';

export default function SkeletonSection() {
    const {darkMode} = React.useContext(ThemeContext);
    return (
        <>
            <h2 className={darkMode ? styles.dark : ""}>Загрузка...</h2>
            <div className={styles.food_section}>
                <FoodItemSkeleton />
                <FoodItemSkeleton />
                <FoodItemSkeleton />
                <FoodItemSkeleton />
                <FoodItemSkeleton />
                <FoodItemSkeleton />
            </div>
        </>
    );
}