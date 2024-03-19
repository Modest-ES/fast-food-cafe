import React from 'react';
import { ThemeContext } from '../App.js';

import styles from './Menu.module.scss';

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
      <div className={styles.menu}>
        <nav className={styles.navigation}>
          <ul>
            {foodItemsList.map((obj)=>(
              <li key={obj.categoryId}>
                <a href={"#" + obj.categoryTag}>{obj.categoryTitle}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div ref={sortingRef} className={styles.sorting}>
          <button className={styles.sorting_button}>
            <img src="./icon_sorting.png" alt="Sort icon" />
            <p onClick={() => setSortingListVisible(!sortingListVisible)} className={darkMode ? styles.dark : ""}>Отсортировать:</p>
          </button>
          {sortingListVisible && (
            <div className={darkMode ? styles.sorting_list_dark : styles.sorting_list}>
              <ul>
                {
                  sortingCategories.map((category, categoryIndex) => (
                    <li 
                    key={categoryIndex} 
                    onClick={() => sortingOptionClicked(category.sortingParameter)}
                    className={(currentSortingMode === category.sortingParameter) ? styles.chosen : ""}>
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