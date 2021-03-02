import React from 'react';
import styles from './about.module.css';
import decoration from '../../../public/images/Group 1735lines.svg';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.decorationUpper}>
        <img src={decoration} alt={'decorative lines'}/>
      </div>
      <div className={styles.aboutBody}>
        <div className={styles.images}>
        </div>
        <div className={styles.info}>
          <h5>About Me</h5>
          <h2>Hello</h2>
          <p>Plan steps for world domination hunt anything that moves, so pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or cat mojo yet cat sit like bread. Please stop looking at your phone and pet me missing until dinner time peer out window, chatter at birds, lure them to mouth yet russian blue. Poop on couch get scared by doggo also cucumerro sleep yet the door is opening! </p>
        </div>
      </div>
      <div className={styles.decorationLower}>
        <img src={decoration} alt={'decorative lines'}/>
      </div>

    </div>
  );
};

export default About;
