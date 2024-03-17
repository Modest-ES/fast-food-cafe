
// Карточка товара внутри категории

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/slices/cartSlice.js";
import { ThemeContext } from '../App.js';

export default function FoodItem({id, options, title, imgsrc, ingredients}) {

  const {darkMode} = React.useContext(ThemeContext);
  const [currentFoodOption, setCurrentFoodOption] = React.useState(0);
  const [ingredientsShown, setIngredientsShown] = React.useState(false);
  const dispatch = useDispatch();

  const showIngredients = () => {
    setIngredientsShown((prev) => !prev);
  }

  const onClickAddItem = () => {
    const currentItem = {
      id,
      title,
      price: options[currentFoodOption][1],
      imgsrc,
      option: options[currentFoodOption][0],
      ingredients
    };
    dispatch(addItem(currentItem));
  }
    return (
      <div className={darkMode ? "food-item-dark" : "food-item"}>
          <img src={imgsrc} alt={title} title={title} className={ingredientsShown ? 'food-item-frontside-flipped' : 'food-item-frontside'} onClick={showIngredients}/>
          <div className={ingredientsShown ? 'food-item-backside-flipped' : 'food-item-backside'} onClick={showIngredients}>
            <h5>Состав:</h5>
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
        <h4 onClick={showIngredients}>{title}</h4>
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