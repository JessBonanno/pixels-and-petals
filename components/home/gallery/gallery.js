import React, {useEffect, useState} from 'react';
import styles from './gallery.module.css';
import Menu from './menu/menu';
import login from '../../../pages/api/login';
import axios from 'axios';

const defaultImages = [
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714073/sj8jiikyecgerng9krvz.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714023/lfrlrcixmf3rez49jkbq.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714018/ujctziuwelgyb01gmmqi.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614714009/vxe3jvuad3bw4xaj0rbk.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713998/fwa5klxm1hfqmfja7gsx.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713991/fubbzwxjeoy9blaxfnzc.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713987/kju9uvhd6irwqkvdcrgq.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713979/v2zglnhjld0uakfkkne3.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713921/iosjp8iwzdl8svbugk7v.jpg'},
  {url: 'https://res.cloudinary.com/jesscodes/image/upload/v1614713908/nhtnp0savaq5yicpq2pq.jpg'},
];

const Gallery = ({images}) => {
  const [imageGroup, setImageGroup] = useState(defaultImages);
  const [folder, setFolder] = useState('');


  useEffect(() => {
    axios.post(`http://localhost:3001/api/images`, {folder: folder})
      .then(res => {
          if (folder === '') {
            setImageGroup(defaultImages);
          } else {
            setImageGroup(res.data);
          }
        }
      );
  }, [folder]);
  return (
    <div className={styles.galleryContainer}>
      <h2>My work</h2>
      <p>Browse some of my portfolio</p>
      <Menu setFolder={setFolder}/>
      <div className={styles.imageContainer}>
        {imageGroup.slice(0, 8).map((image, key) => {
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
