import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h2>email@Gmail.com</h2>
      <FontAwesomeIcon
        icon={['fab', 'instagram']}
        className={styles.icon}/>
      <div className={styles.navContainer}>
        <a
          className={styles.navLink}>
          Home
        </a>
        <a
          className={styles.navLink}>

          About
        </a>
        <a
          className={styles.navLink}>

          Gallery
        </a>
        <a
          className={styles.navLink}>

          Testimonial
        </a>
        <a
          className={styles.navLink}>

          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
