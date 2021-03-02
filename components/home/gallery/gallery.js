import React, {useState} from 'react';
import styles from './gallery.module.css'
import Menu from './menu/menu';

const images = [
'https://res.cloudinary.com/jesscodes/image/upload/v1614714073/sj8jiikyecgerng9krvz.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614714023/lfrlrcixmf3rez49jkbq.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614714018/ujctziuwelgyb01gmmqi.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614714009/vxe3jvuad3bw4xaj0rbk.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614713998/fwa5klxm1hfqmfja7gsx.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614713991/fubbzwxjeoy9blaxfnzc.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614713987/kju9uvhd6irwqkvdcrgq.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614713979/v2zglnhjld0uakfkkne3.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614713921/iosjp8iwzdl8svbugk7v.jpg',
  'https://res.cloudinary.com/jesscodes/image/upload/v1614713908/nhtnp0savaq5yicpq2pq.jpg',
]

const Gallery = () => {
  const [imageGroup, setImageGroup] = useState(images);

  return (
    <div className={styles.galleryContainer}>
      <h2>My work</h2>
      <p>Browse some of my portfolio</p>
      <Menu/>
      <div className={styles.imageContainer}>
        {images.slice(0, 8).map((image, key) => {
          return (
            <div
              key={key}
              className={styles.image}
              style={{backgroundImage: `url(${image}`}}
            >
            </div>
          )
        }) }
      </div>
    </div>
  );
};

export default Gallery;
