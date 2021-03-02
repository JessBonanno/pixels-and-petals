import React, {useState} from 'react';
import styles from './carousel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from './card/card';
import {IconButton} from '@material-ui/core';

const cardData = [
  {
    avatar: '',
    name: 'Bob Smith',
    review: ' Always hungry has closed eyes but still sees you and' +
      ' immediately regret falling into bathtub for find something else more interesting.',
  },
  {
    avatar: '',
    name: 'Jane Doe',
    review: ' Always hungry has closed eyes but still sees you and' +
      ' immediately regret falling into bathtub for find something else more interesting.',
  },
  {
    avatar: '',
    name: 'John Brown',
    review: ' Always hungry has closed eyes but still sees you and' +
      ' immediately regret falling into bathtub for find something else more interesting.',
  },
  {
    avatar: '',
    name: 'Marsha Jones',
    review: ' Always hungry has closed eyes but still sees you and' +
      ' immediately regret falling into bathtub for find something else more interesting.',
  },
  {
    avatar: '',
    name: 'Peter Evans',
    review: ' Always hungry has closed eyes but still sees you and' +
      ' immediately regret falling into bathtub for find something else more interesting.',
  },
  ];

const Carousel = () => {
  const [range, setRange] = useState([0, 3]);

  const goBack = () => {
    if (range[0] !== 0) {
     setRange([
        range[0] -1,
        range[1] -1
      ])
    }
  }

  const goForward = () => {
    if (range[1] !== cardData.length) {
      setRange([
        range[0] + 1,
        range[1] + 1
      ])
    } else {
           setRange([0, 3])

    }
  }

  console.log(range);
  return (
    <div className={styles.carouselContainer}>
      <IconButton onClick={goBack} >
        <FontAwesomeIcon
        icon={['fas', 'chevron-left']}
        className={styles.arrow}
      />
      </IconButton>


      <div className={styles.cardsContainer}>
        {cardData.slice(range[0], range[1]).map((data, key) => {
          return (
            <Card data={data}/>
          )
        })}
      </div>
       <IconButton onClick={goForward} >
        <FontAwesomeIcon
        icon={['fas', 'chevron-right']}
        className={styles.arrow}
      />
      </IconButton>
    </div>
  );
};

export default Carousel;
