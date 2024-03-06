
// Категория товаров основной страницы

import FoodItem from '../components/FoodItem.jsx';

export default function ItemCategory ({objCategory}) {
    return(
        <section key={objCategory.categoryId}>
            <h2 id={objCategory.categoryTag}>{objCategory.categoryTitle}</h2>
            <div className="food-section">
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