import React from 'react';
import styles from './testimonial.module.css'
import Stats from './stats/stats';
import Carousel from './carousel/carousel';

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer} id={'testimonial'}>
      <Stats/>
      <h2>Happy Clients</h2>
      <p>Twitch tail in permanent irritation</p>
      <Carousel/>
    </div>
  );
};

export default Testimonial;
