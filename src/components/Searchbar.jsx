
// Поисковая строка

import React from 'react';
import { SearchContext } from "./pages/Main";

import styles from './Searchbar.module.scss';

export default function Searchbar({classNameTags}) {

    const {searchData, setSearchData} = React.useContext(SearchContext);

    return (
    <div className={classNameTags}>
        <input placeholder="Поиск..." className={styles.search_field} value={searchData} onChange={(event) => setSearchData(event.target.value)}/>

        {searchData && 
        <img width={18} height={18} src="./icon_cross.png" alt="Очистить поиск" title="Очистить поиск" className={`${styles.search_button} ${styles.clear_search}`} onClick={() => setSearchData('')} />}

        {!searchData && 
        <img width={18} height={18} src="./icon_search.png" alt="Поиск" title="Введите запрос в поисковую строку" className={styles.search_button} />}
    </div>
    );
  }