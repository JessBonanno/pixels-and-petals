import React, {useState} from 'react';
import styles from './carousel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from './card/card';
import {IconButton} from '@material-ui/core';

const cardData = [
  {
    avatar: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Bob Smith',
    review: ' Always hungry has closed eyes but still sees you and' +
      ' immediately regret falling into bathtub for find something else more interesting.',
  },
  {
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Jane Doe',
    review: ' Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand cat walks in keyboard so leave fur on owners clothes and twitch tail in permanent irritation.',
  },
  {
    avatar: 'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'John Brown',
    review: 'Meow meow you are my owner so here is a dead rat cats making all the muffins and it 3am, time to create some chaos catasstrophe yet meow meow mama. I am the best scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food hide from vacuum cleaner.',
  },
  {
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Marsha Jones',
    review: 'Paw your face to wake you up in the morning my water bowl is' +
      ' clean and freshly replenished, so I drink from the toilet, and nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws.',
  },
  {
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Peter Evans',
    review: 'Hiiiiiiiiii feed me now i cry and cry and cry unless you pet' +
      ' me, and then maybe i cry just for fun touch my tail, i shred your hand purrrr and climb into cupboard and lick the salt off rice cakes or plan steps for world domination.',
  },
];

const Carousel = () => {
  const [range, setRange] = useState([0, 3]);

  const goBack = () => {
    if (range[0] !== 0) {
      setRange([
        range[0] - 1,
        range[1] - 1
      ]);
    }
  };

  const goForward = () => {
    if (range[1] !== cardData.length) {
      setRange([
        range[0] + 1,
        range[1] + 1
      ]);
    } else {
      setRange([0, 3]);

    }
  };

  console.log(range);
  return (
    <div className={styles.carouselContainer}>
      <IconButton onClick={goBack}>
        <FontAwesomeIcon
          icon={['fas', 'chevron-left']}
          className={styles.arrow}
        />
      </IconButton>


      <div className={styles.cardsContainer}>
        {cardData.slice(range[0], range[1]).map((data, key) => {
          return (
            <Card data={data}/>
          );
        })}
      </div>
      <IconButton onClick={goForward}>
        <FontAwesomeIcon
          icon={['fas', 'chevron-right']}
          className={styles.arrow}
        />
      </IconButton>
    </div>
  );
};

export default Carousel;
