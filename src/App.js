import './scss/app.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main.jsx';
import NotFound from './components/pages/NotFound.jsx';

export const ThemeContext = React.createContext('');

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
