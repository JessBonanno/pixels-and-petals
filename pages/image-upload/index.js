import React, {useEffect, useState} from 'react';
import {useMutate} from 'restful-react';
import styles from './index.module.css';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import jwt from 'jsonwebtoken';
import {parseCookies} from '../../services/parseCookies';
import {useRouter} from 'next/router';


const ImageUpload = ({token}) => {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);


  const [selectedImage, setSelectedImage] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token);
      if (decoded.admin) {
        setAdmin(decoded.admin);
      }
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  const {mutate: uploadImage} = useMutate({
    verb: 'POST',
    path: 'http://localhost:3001/api/image-upload',

  });

  const handleChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('token', localStorage.getItem('token'));
    try {
      const response = await uploadImage(formData);
      setImages([
        ...images,
        response,
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  if (admin) {

    return (
      <div className={styles.uploadContainer}>
        <div style={{
          display: 'flex',
          margin: 'auto',
          width: 400,
          flexWrap: 'wrap',
        }}>
          <h3>Upload new image</h3> <br/>
        </div>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          style={{display: 'none'}}
          onChange={handleChange}
        />
        <label htmlFor="icon-button-file">
          <h5>Choose Image</h5>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span">
            <FontAwesomeIcon
              icon={['far', 'file-image']}/>
          </IconButton>
        </label>
        <h5>Upload Image</h5>
        <IconButton
          disabled={!selectedImage}
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={handleUpload}
        >
          <FontAwesomeIcon
            icon={['fas', 'cloud-upload-alt']}/>
        </IconButton>
        <div className={styles.images}>
          {images && images.map((image, key) => {
            return (
              <img key={key} src={image.url} alt={'uploaded image'}/>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>Unauthorized</div>
    );
  }


};


ImageUpload.getInitialProps = ({req}) => {
  const cookies = parseCookies(req);
  return {
    token: cookies.token
  };

};
export default ImageUpload;
