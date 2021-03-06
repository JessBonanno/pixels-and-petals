import React from 'react';
import styles from './menu.module.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#33A7A6'
  },
});

const NavMenu = ({anchorEl, setAnchorEl, setActive}) => {
  const classes = useStyles();

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.menuContainer}>
      <Menu
        classes={{paper: classes.root}}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className={styles.menu}
      >
        <MenuItem>
          <a
            href={'#home'}
            onClick={() => {
              handleMenuClose();
              setActive('home');
            }}
            className={styles.menuLink}>
            Home
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={'#about'}

            onClick={() => {
              handleMenuClose();
              setActive('about');
            }}
            className={styles.menuLink}>

            About
          </a></MenuItem>
        <MenuItem>
          <a
            href={'#gallery'}

            onClick={() => {
              handleMenuClose();
              setActive('gallery');
            }}
            className={styles.menuLink}>

            Gallery
          </a></MenuItem>
        <MenuItem>
          <a
            href={'#testimonial'}

            onClick={() => {
              handleMenuClose();
              setActive('testimonial');
            }}
            className={styles.menuLink}>

            Testimonial
          </a></MenuItem>
        <MenuItem>
          <a
            href={'#footer'}

            onClick={() => {
              handleMenuClose();
              setActive('contact');
            }}
            className={styles.menuLink}>

            Contact
          </a> </MenuItem> </Menu>
    </div>
  );
};

export default NavMenu;
