import './scss/app.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main.jsx';
import Order from './components/pages/Order.jsx';
import NotFound from './components/pages/NotFound.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
