import React from 'react';

import { ThemeContext } from '../App.js';

import foodItemsList from '../assets/foodItemsList.json';

export default function Menu({currentSortingMode, functionChangeSortingMode}) {
  const sortingCategories = [
    {title: "По популярности", sortingParameter: "id"},
    {title: "По алфавиту", sortingParameter: "title"},
    {title: "По цене", sortingParameter: "price"}
  ];
  const [sortingListVisible, setSortingListVisible] = React.useState(false);
  const sortingRef = React.useRef();
  const {darkMode} = React.useContext(ThemeContext);

  const sortingOptionClicked = (categoryIndex) => {
    functionChangeSortingMode(categoryIndex);
    setSortingListVisible(false);
  }

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!sortingRef.current.contains(e.target)) {
        setSortingListVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

    return (
      <div className="menu">
        <nav className="navigation">
          <ul>
            {foodItemsList.map((obj)=>(
              <li key={obj.categoryId}>
                <a href={"#" + obj.categoryTag}>{obj.categoryTitle}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div ref={sortingRef} className="sorting">
          <button className="sorting-button">
            <img src="./icon_sorting.png" alt="Sort icon" />
            <p onClick={() => setSortingListVisible(!sortingListVisible)} className={darkMode ? "dark" : ""}>Отсортировать:</p>
          </button>
          {sortingListVisible && (
            <div className={darkMode ? "sorting-list-dark" : "sorting-list"}>
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