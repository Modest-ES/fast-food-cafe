
// Обёртка для скелетов карточек товаров

import React from 'react';
import FoodItemSkeleton from './FoodItemSkeleton.jsx';
import { ThemeContext } from '../App.js';

export default function SkeletonSection() {
    const {darkMode} = React.useContext(ThemeContext);
    return (
        <>
            <h2 className={darkMode ? "dark" : ""}>Загрузка...</h2>
            <div className="food-section">
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