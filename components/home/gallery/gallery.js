import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './gallery.module.css';
import Menu from './menu/menu';
import login from '../../../pages/api/login';
import axios from 'axios';
import {IconButton} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Gallery = ({images}) => {
  const [imageGroup, setImageGroup] = useState([]);
  const [folder, setFolder] = useState('');


  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

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


  return (
    <div className={styles.galleryContainer} id={'gallery'}>
      <h2>My work</h2>
      <p>Browse some of my portfolio</p>
      <Menu setFolder={setFolder}/>
      <p>Click an image to view in high resolution</p>
      <div className={styles.imageContainer}>

        {imageGroup.map((image, key) => {
          return (
            <>
              <a
                href={image.url}
                target={'_blank'}
                className={styles.image}
                style={
                  {
                    backgroundImage: `url(${image.url}`,
                    gridRow: image.width < image.height && 'span 2'
                  }
                }
              >
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
};


export default Gallery;
