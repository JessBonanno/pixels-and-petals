import React from 'react';
import styles from './card.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Card = ({data}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.info}>
        <div style={{backgroundImage: `url(${data.avatar})`}} className={styles.avatar}/>
      <p className={styles.name}>{data.name}</p>
      </div>
      <p className={styles.review}>{data.review}</p>
    </div>
  );
};

export default Card;
