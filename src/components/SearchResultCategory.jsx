import FoodItem from '../components/FoodItem.jsx';

export default function ItemCategory ({searchData, objCategory}) {
    return(
        objCategory.itemsList.filter(
            obj => {
                if (obj.title.toLowerCase().includes(searchData.toLowerCase())) {
                    return true;
                }
                return false;
            }
        ).map((obj) => (
            <FoodItem
                key={obj.id}
                {...obj}
            />
        ))
    );
}