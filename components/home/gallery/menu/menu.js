import React, {useState} from 'react';
import styles from './menu.module.css';

const Menu = ({setFolder, setRange}) => {
  const [active, setActive] = useState('all');

  return (
    <div className={styles.menuContainer}>
      <a
        onClick={() => {
          setFolder('');
          setActive('all');
          setRange([0, 8]);
        }}
        className={`${active === 'all' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        All
      </a>
      <a
        onClick={() => {
          setFolder('caninae');
          setActive('caninae');
          setRange([0, 8]);
        }}
        className={`${active === 'caninae' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Caninae
      </a>
      <a
        onClick={() => {
          setFolder('flora');
          setActive('flora');
          setRange([0, 8]);
        }}
        className={`${active === 'flora' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Flora
      </a>
      <a
        onClick={() => {
          setFolder('woodlands');
          setActive('woodlands');
          setRange([0, 8]);
        }}
        className={`${active === 'woodlands' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Woodlands
      </a>
      <a
        onClick={() => {
          setFolder('structural');
          setActive('structural');
          setRange([0, 8]);
        }}
        className={`${active === 'structural' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Structural
      </a>
      <a
        onClick={() => {
          setFolder('misfits');
          setActive('misfits');
          setRange([0, 8]);
        }}
        className={`${active === 'misfits' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        Misfits
      </a>
    </div>
  );
};

export default Menu;
