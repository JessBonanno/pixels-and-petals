import React, {useState} from 'react';
import styles from './menu.module.css'

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
        onClick={() => setActive('pixels')}
        className={`${active === 'pixels' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Pixels
      </a>
      <a
        onClick={() => setActive('petals')}
        className={`${active === 'petals' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Petals
      </a>
      <a
        onClick={() => setActive('pets')}
        className={`${active === 'pets' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Pets
      </a>
    </div>
  );
};

export default Menu;
