import React from 'react';
import styles from './topWIdget.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const TopWidget = () => {
  return (
    <div className={styles.topWidgetContainer}>
      <a href={'#home'} className={styles.widget}><span className={styles.text}>To Top</span><FontAwesomeIcon icon={['fas', 'arrow-up']} className={styles.arrow}/></a>
    </div>
  );
};

export default TopWidget;
