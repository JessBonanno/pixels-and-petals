import React, {useState} from 'react';
import styles from './nav.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import NavMenu from './menu/navMenu';

const Navigation = () => {
  const [active, setActive] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  return (
    <div className={styles.navContainer} id={'home'}>
      <IconButton className={styles.iconButton} onClick={handleMenuClick}>
        <FontAwesomeIcon
          icon={['fas', 'ellipsis-v']}
          className={styles.icon}/>
      </IconButton>
      <NavMenu setAnchorEl={setAnchorEl} anchorEl={anchorEl} setActive={setActive}/>
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
