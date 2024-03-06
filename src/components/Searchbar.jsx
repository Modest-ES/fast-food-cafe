
// Поисковая строка

import React from 'react';

import { SearchContext } from "./pages/Main";

export default function Searchbar({classNameTags}) {

    const {searchData, setSearchData} = React.useContext(SearchContext);

    return (
    <div className={classNameTags}>
        <input placeholder="Поиск..." className="search-field" value={searchData} onChange={(event) => setSearchData(event.target.value)}/>

        {searchData && 
        <img width={18} height={18} src="./icon_cross.png" alt="Очистить поиск" title="Очистить поиск" className="search-button clear-search" onClick={() => setSearchData('')} />}

        {!searchData && 
        <img width={18} height={18} src="./icon_search.png" alt="Поиск" title="Введите запрос в поисковую строку" className="search-button" />}
    </div>
    );
  }