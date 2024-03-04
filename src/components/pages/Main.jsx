import '../../scss/app.scss';

import React from 'react';
import axios from 'axios';

import ArrowIcon from '../ArrowIcon.jsx';
import Topbar from '../Topbar.jsx';
import Menu from '../Menu.jsx';
import FoodItem from '../FoodItem.jsx';
import FoodItemSkeleton from '../FoodItemSkeleton.jsx';
import Bottombar from '../Bottombar.jsx';
import CartOverlayShell from '../CartOverlayShell.jsx';

export const SearchContext = React.createContext();

export default function Main() {
    const [foodItemsList, setFoodItemsList] = React.useState([]);
    const [contentIsLoading, setContentIsLoading] = React.useState(true);
    const [cartIsOpened, setCartIsOpened] = React.useState(false);
    const [sortingMode, setSortingMode] = React.useState("id");
    const [searchData, setSearchData] = React.useState('');
    
    React.useEffect(() => {
      setTimeout(() => {
        axios.get(`https://65d8c66cc96fbb24c1bc47d2.mockapi.io/fooditems`).then((response) => {
          setFoodItemsList(response.data);
          setContentIsLoading(false);
        });
      }, 1);
    }, []);

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
        <>
            <div className="mainshell">
                {cartIsOpened && 
                <CartOverlayShell onClickBtnBack={() => setCartIsOpened(false)} />}

                {/* <CartOverlayShell onClickBtnBack={() => setCartIsOpened(false)} classNameTag={cartIsOpened ? "open-cart" : "close-cart"}/> */}

                <SearchContext.Provider value={{searchData, setSearchData}}>
                    <Topbar onClickCart={() => setCartIsOpened(true)} />
                </SearchContext.Provider>
            
                <div className="main-section">
                    {!searchData && <Menu currentSortingMode={sortingMode} functionChangeSortingMode={(i) => setSortingMode(i)} />}
                    {contentIsLoading &&
                        <>
                            <h2>Загрузка...</h2>
                            <div className="food-section">
                            <FoodItemSkeleton />
                            <FoodItemSkeleton />
                            <FoodItemSkeleton />
                            <FoodItemSkeleton />
                            <FoodItemSkeleton />
                            <FoodItemSkeleton />
                            </div>
                        </>
                    }
                    {!searchData &&
                        foodItemsList.map((objCategory) => (
                            sortFetchedData(objCategory))).map((objCategory) => (
                                <div key={objCategory.categoryId}>
                                <h2 id={objCategory.categoryTag}>{objCategory.categoryTitle}</h2>
                                <div className="food-section">
                                    {objCategory.itemsList.map((obj) => (
                                    <FoodItem
                                        key={obj.id}
                                        {...obj}
                                    />
                                    ))}
                                </div>
                                </div>
                            ))
                    }
                    {searchData &&
                        <>
                        <h2>Поиск по запросу: "{searchData}"</h2>
                        <div className="food-section">
                            {foodItemsList.map((objCategory) => (
                                sortFetchedData(objCategory))).map((objCategory) => (
                                    objCategory.itemsList.filter(
                                        obj => {
                                            if (obj.title.toLowerCase().includes(searchData.toLowerCase())) {
                                                return true;
                                            }
                                            return false;
                                        }).map((obj) => (
                                    <FoodItem
                                        key={obj.id}
                                        options={obj.options}
                                        title={obj.title}
                                        price={obj.price}
                                        imgsrc={obj.imgsrc}
                                    />
                                    ))
                                ))
                            }
                        </div>
                        </>
                    }
                </div>
                <Bottombar />
                <ArrowIcon />
            </div>
        </>
    );
};