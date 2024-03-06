
// Карточка товара внутри категории

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/slices/cartSlice.js";

export default function FoodItem({id, options, title, imgsrc}) {

  const [currentFoodOption, setCurrentFoodOption] = React.useState(0);
  const dispatch = useDispatch();

  const onClickAddItem = () => {
    const currentItem = {
      id,
      title,
      price: options[currentFoodOption][1],
      imgsrc,
      option: options[currentFoodOption][0]
    };
    dispatch(addItem(currentItem));
  }
    return (
      <div className="food-item">
        <img src={imgsrc} alt={title} title={title}/>
        <h4>{title}</h4>
        <div className="food-item-options">
          {
            options.map((optionTitle, optionIndex) => (
              <button key={optionIndex} onClick={() => setCurrentFoodOption(optionIndex)} className={currentFoodOption === optionIndex ? "chosen" : ""}>{optionTitle[0]}</button>
            ))
          }
        </div>
        <div className="food-item-bar">
          <p>{options[currentFoodOption][1]} руб.</p>
          <button className="food-item-buy-button"
          onClick={onClickAddItem}>Выбрать</button>
        </div>
      </div>
    );
  }