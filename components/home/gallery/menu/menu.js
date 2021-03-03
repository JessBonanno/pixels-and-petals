import React, {useState} from 'react';
import styles from './menu.module.css';

const Menu = () => {
  const [active, setActive] = useState('all');

  return (
    <div className={styles.menuContainer}>
      <a
        onClick={() => setActive('all')}
        className={`${active === 'all' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        All
      </a>
      <a
        onClick={() => setActive('caninae')}
        className={`${active === 'caninae' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Caninae
      </a>
      <a
        onClick={() => setActive('flora')}
        className={`${active === 'flora' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Flora
      </a>
      <a
        onClick={() => setActive('woodlands')}
        className={`${active === 'woodlands' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Woodlands
      </a>
      <a
      onClick={() => setActive('structural')}
      className={`${active === 'structural' ? styles.active : styles.inactive} ${styles.menuLink}`}>
      Structural
    </a>
      <a
      onClick={() => setActive('misfits')}
      className={`${active === 'misfits' ? styles.active : styles.inactive} ${styles.menuLink}`}>
      Misfits
    </a>
    </div>
  );
};

export default Menu;
