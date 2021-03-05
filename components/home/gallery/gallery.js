import React, {useEffect, useState} from 'react';
import styles from './gallery.module.css';
import Menu from './menu/menu';
import login from '../../../pages/api/login';
import axios from 'axios';
import {IconButton} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const defaultImages = [
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714073/sj8jiikyecgerng9krvz.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714023/lfrlrcixmf3rez49jkbq.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714018/ujctziuwelgyb01gmmqi.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714009/vxe3jvuad3bw4xaj0rbk.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713998/fwa5klxm1hfqmfja7gsx.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713991/fubbzwxjeoy9blaxfnzc.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713987/kju9uvhd6irwqkvdcrgq.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713979/v2zglnhjld0uakfkkne3.jpg'},
];

const Gallery = ({images}) => {
  const [imageGroup, setImageGroup] = useState(defaultImages);
  const [folder, setFolder] = useState('');
    const [range, setRange] = useState([0, 8]);

  const goBack = () => {
    if (range[0] !== 0) {
      setRange([
        range[0] - 8,
        range[1] - 8
      ]);
    }
  };

  const goForward = () => {
    if (range[1] !== imageGroup.length) {
      setRange([
        range[0] + 8,
        range[1] + 8
      ]);
    } else {
      setRange([0, 3]);

    }
  };
  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  useEffect(() => {
    axios.post(`/api/images`, {folder: folder})
      .then(res => {
          if (folder === '') {
            setImageGroup(shuffleArray(res.data));
          } else {
            setImageGroup(res.data);
          }
        }
      );
  }, [folder]);

  const getImages = async () => {
        const res = await axios.get('/api/images');

  }

  return (
    <div className={styles.galleryContainer}>
      <h2>My work</h2>
      <p>Browse some of my portfolio</p>
      <Menu setFolder={setFolder} setRange={setRange}/>
      <div className={styles.galleryNavigation}>
        <IconButton onClick={goBack}>
          <FontAwesomeIcon
            icon={['fas', 'chevron-left']}
            className={styles.arrow}
          />
        </IconButton>
        <p>Click an image to view in high resolution</p>
        <IconButton onClick={goForward}>
          <FontAwesomeIcon

            icon={['fas', 'chevron-right']}
            className={styles.arrow}
          />
        </IconButton>
      </div>
      <div className={styles.imageContainer}>

        {imageGroup.slice(range[0], range[1]).map((image, key) => {
          return (
            <div
              key={key}
              className={styles.image}
              style={{backgroundImage: `url(${image.url}`}}
            >
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Gallery;
