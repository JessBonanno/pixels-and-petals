import React, {useContext, useEffect, useState} from 'react';
import styles from './menu.module.css';
import {Context} from '../../../../context';

const Menu = ({setFolder}) => {
  const [active, setActive] = useState('all');
  const {imageFolders} = useContext(Context);
  return (
    <div className={styles.menuContainer}>
      <a
        onClick={() => {
          setFolder('');
          setActive('all');
        }}
        className={`${active === 'all' ? styles.active : styles.inactive} ${styles.menuLink}`}>
        All
      </a>
      {imageFolders.folders && imageFolders.folders.map((folder, key) => {
        return (
          <a
            key={key}
            onClick={() => {
              setFolder(folder.name);
              setActive(folder.name);
            }}
            className={`${active === folder.name ? styles.active : styles.inactive} ${styles.menuLink}`}>
            {folder.name}
          </a>
        );
      })}

    </div>
  );
};


export default Menu;
