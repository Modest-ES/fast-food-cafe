import React from 'react';

import foodItemsList from '../assets/foodItemsList.json';

export default function Menu({currentSortingMode, functionChangeSortingMode}) {
  const sortingCategories = [
    {title: "По популярности", sortingParameter: "id"},
    {title: "По алфавиту", sortingParameter: "title"},
    {title: "По цене", sortingParameter: "price"}
  ];
  const [sortingListVisible, setSortingListVisible] = React.useState(false);

  const sortingOptionClicked = (categoryIndex) => {
    functionChangeSortingMode(categoryIndex);
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
                  sortingCategories.map((category, categoryIndex) => (
                    <li 
                    key={categoryIndex} 
                    onClick={() => sortingOptionClicked(category.sortingParameter)}
                    className={currentSortingMode === category.sortingParameter ? "chosen" : ""}>
                      {category.title}
                    </li>
                  ))
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }