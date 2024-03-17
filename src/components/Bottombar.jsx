
// Подвал страницы с вспомогательной информацией

import React from "react";
import { ThemeContext } from "../App";

export default function ArrowIcon() {
  const {darkMode} = React.useContext(ThemeContext);
    return (
      <footer className="bottombar">
        <p className={darkMode ? "dark" : ""}>©Fast Food Cafe 2024</p>
        <p className={darkMode ? "dark" : ""}>All rights reserved</p>
      </footer>
    );
  }
  