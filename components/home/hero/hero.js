import React from 'react';
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroHeading}>
      <h2>Welcome,</h2>
        <h1>I'm Alex</h1>
        <p>Leave hair on owner's clothes crash against wall but walk away like nothing happened or while happily ignoring when being called. </p>
    </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default Hero;
