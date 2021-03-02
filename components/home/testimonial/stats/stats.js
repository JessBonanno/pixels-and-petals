import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './stats.module.css'

const Stats = () => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.stat}>
        <FontAwesomeIcon
          icon={['far', 'smile-wink']}
        className={styles.icon}/>
        <p className={styles.metric}>28</p>
        <p className={styles.description}>Happy Clients</p>
      </div>
      <div className={styles.stat}>
        <FontAwesomeIcon
          icon={['far', 'images']}
        className={styles.icon}/>
                <p className={styles.metric}>300</p>
        <p className={styles.description}>Photos</p>

      </div>
      <div className={styles.stat}>
        <FontAwesomeIcon
          icon={['far', 'heart']}
          className={styles.icon}/>
                  <p className={styles.metric}>2k</p>
        <p className={styles.description}>Likes</p>

      </div>
      <div className={styles.stat}>
        <FontAwesomeIcon
          icon={['fab', 'instagram']}
          className={styles.icon}/>
                  <p className={styles.metric}>2</p>
        <p className={styles.description}>Moderating</p>

      </div>
    </div>
  );
};

export default Stats;
