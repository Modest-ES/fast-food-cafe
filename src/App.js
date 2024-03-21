import './scss/app.scss';

import React from 'react';

import Main from './components/pages/Main.jsx';

export const ThemeContext = React.createContext('');

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Main />
    </ThemeContext.Provider>
  );
}

export default App;
