
// Обёртка для скелетов карточек товаров

import FoodItemSkeleton from './FoodItemSkeleton.jsx';

export default function SkeletonSection() {
    return (
        <>
            <h2>Загрузка...</h2>
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