
// Основная / корневая страница сайта

import '../../scss/app.scss';

import React from 'react';
import axios from 'axios';

import ArrowIcon from '../ArrowIcon.jsx';
import Topbar from '../Topbar.jsx';
import Menu from '../Menu.jsx';
import Bottombar from '../Bottombar.jsx';
import CartOverlayShell from '../CartOverlayShell.jsx';
import ItemCategory from '../ItemCategory.jsx';
import SearchResultCategory from '../SearchResultCategory.jsx';
import SkeletonSection from '../SkeletonSection.jsx';

import { ThemeContext } from '../../App.js';

export const SearchContext = React.createContext();

export default function Main() {
    const [foodItemsList, setFoodItemsList] = React.useState([]); // список всех товаров
    const [contentIsLoading, setContentIsLoading] = React.useState(true); // статус состояния загрузки информации с бэкенда (загружается / нет)
    const [cartIsOpened, setCartIsOpened] = React.useState(false); // статус открытия корзины (открыта / нет)
    const [sortingMode, setSortingMode] = React.useState("id"); // тип сортировки товаров (id = по популярности / price = по цене / title = по алфавиту)
    const [searchData, setSearchData] = React.useState(''); // данные поля ввода поисковой строки
    const {darkMode} = React.useContext(ThemeContext);
    
    // Реализация запроса данных с бэкенда
    React.useEffect(() => {
      setTimeout(() => {
        axios.get(`https://65d8c66cc96fbb24c1bc47d2.mockapi.io/fooditems`).then((response) => {
          setFoodItemsList(response.data);
          setContentIsLoading(false);
        });
      }, 1);
    }, []);

    // Сортировка списка товаров
    const sortFetchedData = (fetchedData) => {
        let sortedList;
        if (sortingMode === "price") {
            sortedList = fetchedData.itemsList.sort(function(a, b) {
                return a.options[0][1] - b.options[0][1];
            })
        } else {
            if (sortingMode === "title") {
                sortedList = fetchedData.itemsList.sort(function(a, b) {
                    let x = a.title.toLowerCase();
                    let y = b.title.toLowerCase();
                    if (x > y) {return 1;}
                    if (x < y) {return -1;}
                    return 0;
                });
            } else {
                sortedList = fetchedData.itemsList.sort(function(a, b) {
                    return a.id - b.id;
                })
            }
        }
        fetchedData.itemsList = sortedList;
        return(fetchedData);
    }

    return(
            <main className={darkMode ? "mainshell-dark" : "mainshell"}>

                {cartIsOpened && 
                <CartOverlayShell onClickBtnBack={() => setCartIsOpened(false)} />}

                <SearchContext.Provider value={{searchData, setSearchData}}>
                    <Topbar onClickCart={() => setCartIsOpened(true)} />
                </SearchContext.Provider>

                <div className="main-section">
                    {!searchData && <Menu currentSortingMode={sortingMode} functionChangeSortingMode={(i) => setSortingMode(i)} />}

                    {contentIsLoading &&
                        <SkeletonSection />
                    }

                    {!searchData &&
                        foodItemsList.map((objCategory) => (
                            sortFetchedData(objCategory))).map((objCategory) => (
                                <ItemCategory objCategory={objCategory}/>
                            ))
                    }

                    {searchData &&
                        <>
                            <h2 className={darkMode ? "dark" : ""}>Поиск по запросу: "{searchData}"</h2>
                            <div className="food-section">
                                {foodItemsList.map((objCategory) => (
                                    sortFetchedData(objCategory))).map((objCategory) => (
                                        <SearchResultCategory key={objCategory.id}searchData={searchData} objCategory={objCategory} />
                                    ))
                                }
                            </div>
                        </>
                    }
                </div>
                <Bottombar />
                <ArrowIcon />
            </main>
    );
};