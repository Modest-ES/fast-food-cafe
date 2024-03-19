
// Подвал страницы с вспомогательной информацией

import React from "react";
import { ThemeContext } from "../App";

import styles from './Bottombar.module.scss';

export default function ArrowIcon() {
  const {darkMode} = React.useContext(ThemeContext);
    return (
      <footer className={styles.bottombar}>
        <p className={darkMode ? styles.dark : ""}>©Fast Food Cafe 2024</p>
        <p className={darkMode ? styles.dark : ""}>All rights reserved</p>
      </footer>
    );
  }
  