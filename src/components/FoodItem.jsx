import React from 'react';

export default function FoodItem({options, title, price, imgsrc}) {

  const [currentFoodOption, setCurrentFoodOption] = React.useState(0);
    return (
      <div className="food-item">
        <img src={imgsrc} alt={title} title={title}/>
        <h4>{title}</h4>
        <div className="food-item-options">
          {
            options.map((optionTitle, optionIndex) => (
              <p key={optionIndex} onClick={() => setCurrentFoodOption(optionIndex)} className={currentFoodOption === optionIndex ? "chosen" : ""}>{optionTitle}</p>
            ))
          }
        </div>
        <div className="food-item-bar">
          <p>{price} руб.</p>
          <div className="food-item-buy-button">
            <p>Выбрать</p>
          </div>
        </div>
      </div>
    );
  }