
// Кнопка возвращения наверх страницы

import styles from './ArrowIcon.module.scss';

export default function ArrowIcon() {
  return (
    <button className={styles.arrow_icon}>
      <a href="#top">
        <i className="fas fa-chevron-circle-up"></i>
      </a>
    </button>
  );
}
