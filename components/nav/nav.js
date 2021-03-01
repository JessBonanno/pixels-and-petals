import React, {useState} from 'react';
import styles from './nav.module.css';
import Link from 'next/link';

const Navigation = () => {
  const [active, setActive] = useState();

  return (
    <div className={styles.navContainer}>
      <a
        onClick={() => setActive('home')}
        className={`${active === 'home' ? styles.active : styles.inactive} ${styles.navLink}`}>
        Home
      </a>
      <a
        onClick={() => setActive('about')}
        className={`${active === 'about' ? styles.active : styles.inactive} ${styles.navLink}`}>

        About
      </a>
      <a
        onClick={() => setActive('gallery')}
        className={`${active === 'gallery' ? styles.active : styles.inactive} ${styles.navLink}`}>

        Gallery
      </a>
      <a
        onClick={() => setActive('testimonial')}
        className={`${active === 'testimonial' ? styles.active : styles.inactive} ${styles.navLink}`}>

        Testimonial
      </a>
      <a
        onClick={() => setActive('contact')}
        className={`${active === 'contact' ? styles.active : styles.inactive} ${styles.navLink}`}>

        Contact
      </a>
    </div>
  );
};

export default Navigation;
