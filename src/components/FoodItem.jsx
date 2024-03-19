
// Карточка товара внутри категории

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/slices/cartSlice.js";
import { ThemeContext } from '../App.js';

import styles from './FoodItem.module.scss';

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
      <div className={darkMode ? `${styles.food_item} ${styles.food_item_dark}` : styles.food_item}>
          <img src={imgsrc} alt={title} title={title} className={ingredientsShown ? styles.food_item_frontside_flipped : styles.food_item_frontside} onClick={showIngredients}/>
          <div className={ingredientsShown ? styles.food_item_backside_flipped : styles.food_item_backside} onClick={showIngredients}>
            <h5>Состав:</h5>
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
        <h4 onClick={showIngredients}>{title}</h4>
        <div className={styles.food_item_options}>
          {
            options.map((optionTitle, optionIndex) => (
              <button key={optionIndex} onClick={() => setCurrentFoodOption(optionIndex)} className={(currentFoodOption === optionIndex) ? styles.chosen : ""}>{optionTitle[0]}</button>
            ))
          }
        </div>
        <div className={styles.food_item_bar}>
          <p>{options[currentFoodOption][1]} руб.</p>
          <button className={styles.food_item_buy_button}
          onClick={onClickAddItem}>Выбрать</button>
        </div>
      </div>
    );
  }