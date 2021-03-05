import React, {useState} from 'react';
import styles from './nav.module.css';
import Link from 'next/link';

const Navigation = () => {
  const [active, setActive] = useState();

  return (
    <div className={styles.navContainer}  id={'home'}>
      <a
        href={'#home'}
        onClick={() => {
          setActive('home');
        }}
        className={`${active === 'home' ? styles.active : styles.inactive} ${styles.navLink}`}>
        Home
      </a>
      <a
        href={'#about'}

        onClick={() => setActive('about')}
        className={`${active === 'about' ? styles.active : styles.inactive} ${styles.navLink}`}>

        About
      </a>
      <a
        href={'#gallery'}

        onClick={() => setActive('gallery')}
        className={`${active === 'gallery' ? styles.active : styles.inactive} ${styles.navLink}`}>

        Gallery
      </a>
      <a
        href={'#testimonial'}

        onClick={() => setActive('testimonial')}
        className={`${active === 'testimonial' ? styles.active : styles.inactive} ${styles.navLink}`}>

        Testimonial
      </a>
      <a
        href={'#footer'}

        onClick={() => setActive('contact')}
        className={`${active === 'contact' ? styles.active : styles.inactive} ${styles.navLink}`}>

        Contact
      </a>
    </div>
  );
};

export default Navigation;
