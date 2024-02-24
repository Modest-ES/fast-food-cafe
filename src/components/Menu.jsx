import React from 'react';

import foodItemsList from '../assets/foodItemsList.json';

export default function Menu() {
  const sortingCategories = ['По популярности', 'По алфавиту', 'По цене'];

  const [currentSortingIndex, setCurrentSortingIndex] = React.useState(0);
  const [sortingListVisible, setSortingListVisible] = React.useState(false);

  const sortingOptionClicked = (categoryIndex) => {
    setCurrentSortingIndex(categoryIndex);
    setSortingListVisible(false);
  }

    return (
      <div className="menu">
        <div className="navigation">
          <ul>
            {foodItemsList.map((obj)=>(
              <li key={obj.categoryId}>
                <a href={"#" + obj.categoryTag}>{obj.categoryTitle}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sorting">
          <div className="sorting-button">
            <img src="./icon_sorting.png" alt="Sort icon" />
            <p onClick={() => setSortingListVisible(!sortingListVisible)}>Отсортировать:</p>
          </div>
          {sortingListVisible && (
            <div className="sorting-list">
              <ul>
                {
                  sortingCategories.map((categoryTitle, categoryIndex) => (
                    <li key={categoryIndex} onClick={() => sortingOptionClicked(categoryIndex)} className={currentSortingIndex === categoryIndex ? "chosen" : ""}>{categoryTitle}</li>
                  ))
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }