export default function Topbar({onClickCart, searchData, setSearchData}) {
    return (
      <div className="topbar-shell">
        <div className="topbar">
          <div className="logo-section">
            <img src="./favicon_light.png" alt="Logo" />
            <div className="logo-text">
              <h3>Fast Food Cafe</h3>
              <p>Доставка еды на дом</p>
            </div>
          </div>
          <div className="search-block search-topbar">
              <input placeholder="Поиск..." className="search-field" value={searchData} onChange={(event) => setSearchData(event.target.value)}/>

              {searchData && 
              <img width={18} height={18} src="./icon_cross.png" alt="Очистить поиск" title="Очистить поиск" className="search-button clear-search" onClick={() => setSearchData('')} />}

              {!searchData && 
              <img width={18} height={18} src="./icon_search.png" alt="Поиск" title="Введите запрос в поисковую строку" className="search-button" />}
          </div>
          <div className="cart-section">
            <div className="cart-button" title="Shopping Cart" onClick={onClickCart}>
              <p>12345 руб.</p>
              <div className="cart-button-icon">
                <img src="./icon_shoppingcart.png" alt="Cart" />
                <p>20</p>
              </div>
            </div>
          </div>
        </div>
        <div className="search-block search-under-topbar">
          <input placeholder="Поиск..." className="search-field" value={searchData} onChange={(event) => setSearchData(event.target.value)}/>

          {searchData && 
          <img width={18} height={18} src="./icon_cross.png" alt="Очистить поиск" title="Очистить поиск" className="search-button clear-search" onClick={() => setSearchData('')} />}

          {!searchData && 
          <img width={18} height={18} src="./icon_search.png" alt="Поиск" title="Введите запрос в поисковую строку" className="search-button" />}
        </div>
      </div>
    );
  }