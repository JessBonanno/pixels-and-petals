import React, {useContext, useEffect, useState} from 'react';
import {useMutate} from 'restful-react';
import styles from './index.module.css';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import jwt from 'jsonwebtoken';
import {parseCookies} from '../../services/parseCookies';
import {useRouter} from 'next/router';
import {Context} from '../../context';


const ImageUpload = ({folders}) => {
  const router = useRouter();
  const [token, setToken] = useState();
  const [admin, setAdmin] = useState(null);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedFolder, setSelectedFolder] = useState();
  const [newFolder, setNewFolder] = useState('');
  const [canUpload, setCanUpload] = useState(false);
  const [images, setImages] = useState([]);
  const [imageFolders, setImageFolders] = useState([]);

  //check for token
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  //  get folders from props for use in radio buttons
  useEffect(() => {
    if (folders) {
      console.log(folders.folders);
      setImageFolders(folders.folders);
    }
  }, [folders]);

  // decode token
  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token);
      if (decoded.admin) {
        setAdmin(decoded.admin);
      }
    }
  }, [token]);

  // reroute if no token
  useEffect(() => {
    if (!token) {
      // TODO handle routing!
      // router.push('/login');
    }
  }, []);

  // send the uploaded image to cloudinary
  const {mutate: uploadImage} = useMutate({
    verb: 'POST',
    path: 'http://localhost:3001/api/image-upload',

  });

  const handleSelectImage = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSelectFolder = (e) => {
    setSelectedFolder(e.target.value);
    setNewFolder('');
  };

  const handleNewFolderChanges = (e) => {
    setSelectedFolder('');
    setNewFolder(e.target.value);
  };

  const handleAddNewFolder = (e) => {
    e.preventDefault();
    setSelectedFolder(newFolder);
    setNewFolder('');
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('token', localStorage.getItem('token'));
    formData.append('folderName', selectedFolder);
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

  console.log(selectedImage);

  // enable upload button after image and folder are selected
  useEffect(() => {
    if (selectedFolder && selectedImage) {
      setCanUpload(true);
    }
  }, [selectedFolder, selectedImage]);


  if (admin && imageFolders) {
    return (
      <div className={styles.uploadContainer}>
        <h2>Upload new image</h2> <br/>
        <div className={styles.folderSelectionWrapper}>
          <h5>Select Folder:</h5>
          <div className={styles.radioGroup}>
            {imageFolders.length > 0 && imageFolders.map((folder, key) => {
              console.log('in the map');
              return (
                <div key={key}>
                  <label htmlFor={key} className={styles.inputLabel}>
                    {folder.name}
                  </label>
                  <input type={'radio'}
                         checked={selectedFolder === folder.name}
                         id={key}
                         name={'folderSelection'}
                         value={folder.name}
                         onChange={handleSelectFolder}/>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.newFolderWrapper}>
          <h5>Or Create a New Folder:</h5>
          <form onSubmit={handleAddNewFolder}>
            <label htmlFor={'newFolderChoice'}>
              <input
                className={styles.folderInput}
                type={'text'}
                id={'newFolderChoice'}
                name={'newFolder'}
                placeholder={'Folder Name'}
                value={newFolder} onChange={handleNewFolderChanges}/>
            </label>
            <button className={styles.confirmButton} type={'submit'}>Confirm
            </button>
          </form>
        </div>

        <div className={styles.imageActionsWrapper}>


          <div className={styles.uploadInputWrapper}>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              style={{display: 'none'}}
              onChange={handleSelectImage}
            />
            <h5>Choose Image</h5>
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span">
                <FontAwesomeIcon
                  icon={['far', 'file-image']} className={styles.fontAwesome}/>
              </IconButton>
            </label>
          </div>

          <div className={styles.uploadWrapper}>
            <h5>Upload Image</h5>
            <IconButton
              disabled={!canUpload}
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={handleUpload}
            >
              <FontAwesomeIcon
                icon={['fas', 'cloud-upload-alt']}
                style={{color: canUpload && '#33A7A6'}}/>
            </IconButton>
          </div>
        </div>
        {selectedImage && (
          <div className={styles.uploadPreview}>
            <h5>Selected Image:   {selectedImage.name}</h5>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>Unauthorized</div>
    );
  }
};

// getting image folders from api
export const getServerSideProps = async ({req}) => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/jesscodes/folders/pixels`);
  const folders = await res.json();
  return {
    props: {
      folders,
    }
  };
};


export default ImageUpload;

