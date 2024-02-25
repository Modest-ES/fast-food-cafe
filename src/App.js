import './scss/app.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main.jsx';
import Order from './components/pages/Order.jsx';
import NotFound from './components/pages/NotFound.jsx';

export const CartContext = React.createContext('');

function App() {
  return (
    <CartContext.Provider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/placeorder" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
