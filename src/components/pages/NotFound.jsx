
// Вспомогательная 404-страница 

import '../../scss/app.scss';
import notFoundStyles from './NotFound.module.scss';
import mainStyles from './Main.module.scss';
import topbarStyles from '../Topbar.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Bottombar from '../Bottombar.jsx';

export default function NotFound() {

  React.useEffect(() => {
    document.body.style.background = 'rgb(217, 252, 210)';
  }, []);

    return(
    <div className={mainStyles.mainshell}>
      <Link to="/" className={topbarStyles.topbar}>
        <button className={topbarStyles.logo_section}>
          <img src="./favicon_light.png" alt="Logo" />
          <div className={topbarStyles.logo_text}>
            <h3>Fast Food Cafe</h3>
            <p>Доставка еды на дом</p>
          </div>
        </button>
      </Link>
      <div className={notFoundStyles.not_found_screen}>
        <img src="./icon_404.png" alt="404 Page Not Found" title="Страница не найдена" />
        <h1>Ошибка: Страница не найдена</h1>
        <button className={notFoundStyles.button_to_main}>
            <Link to="/"><p>На главную</p></Link>
        </button>
      </div>
      <Bottombar />
    </div>
    );
};