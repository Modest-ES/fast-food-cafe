
// Вспомогательная 404-страница 

import '../../scss/app.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Bottombar from '../Bottombar.jsx';

export default function NotFound() {
    return(
    <div className="mainshell">
      <Link to="/" className="topbar">
        <div className="logo-section">
          <img src="./favicon_light.png" alt="Logo" />
          <div className="logo-text">
            <h3>Fast Food Cafe</h3>
            <p>Доставка еды на дом</p>
          </div>
        </div>
      </Link>
      <div className='not-found-screen'>
        <img src="./icon_404.png" alt="404 Page Not Found" title="Страница не найдена" />
        <h1>Ошибка: Страница не найдена</h1>
        <div className='button-to-main'>
            <Link to="/"><p>На главную</p></Link>
        </div>
      </div>
      <Bottombar />
    </div>
    );
};