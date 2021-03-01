import React, {useState} from 'react';
import {useMutate} from 'restful-react';
import styles from './index.module.css';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [uploadedImage, setUploadedImage] = useState();

  const {mutate: uploadImage} = useMutate({
    verb: 'POST',
    path: 'http://localhost:3001/api/image-upload'
  });

  const handleChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log(selectedImage);
    const formData = new FormData();
    formData.append('image', selectedImage);
    try {
      const response = await uploadImage(formData);
      setUploadedImage(response)
    } catch (err) {
      console.log(err);
    }
  };

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
    </div>
  );
};

export default ImageUpload;
