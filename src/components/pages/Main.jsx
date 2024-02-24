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

export default function Main() {
    const [foodItemsList, setFoodItemsList] = React.useState([]);
    const [contentIsLoading, setContentIsLoading] = React.useState(true);
    const [cartIsOpened, setCartIsOpened] = React.useState(false);
  
    // React.useEffect(() => {
    //   fetch('https://65d8c66cc96fbb24c1bc47d2.mockapi.io/fooditems')
    //     .then((fetchdata) => {
    //       return fetchdata.json();
    //     })
    //     .then((jsondata) => {
    //       setFoodItemsList(jsondata);
    //     });
    // }, []);
  
    React.useEffect(() => {
      setTimeout(() => {
        axios.get('https://65d8c66cc96fbb24c1bc47d2.mockapi.io/fooditems').then((response) => {
          setFoodItemsList(response.data);
          setContentIsLoading(false);
        });
      }, 1);
    }, []);

    return(
        <div className="mainshell">
            {cartIsOpened && <CartOverlayShell onClickBtnBack={() => setCartIsOpened(false)} />}
            <Topbar onClickCart={() => setCartIsOpened(true)} />
            <div className="main-section">
                <Menu />
                {contentIsLoading ? (
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
                ) : (
                foodItemsList.map((objCategory) => (
                    <div key={objCategory.categoryId}>
                    <h2 id={objCategory.categoryTag}>{objCategory.categoryTitle}</h2>
                    <div className="food-section">
                        {objCategory.itemsList.map((obj) => (
                        <FoodItem
                            key={obj.id}
                            options={obj.options}
                            title={obj.title}
                            price={obj.price}
                            imgsrc={obj.imgsrc}
                        />
                        ))}
                    </div>
                    </div>
                ))
                )}
            </div>
            <Bottombar />
            <ArrowIcon />
        </div>
    );
};