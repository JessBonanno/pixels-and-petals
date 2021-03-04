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
  const [token, setToken] = useState();


  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);


  const router = useRouter();

  const [admin, setAdmin] = useState(null);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedFolder, setSelectedFolder] = useState();
  const [newFolder, setNewFolder] = useState('');
  const [canUpload, setCanUpload] = useState(false);
  const [radioChecked, setRadioChecked] = useState(false);
  const [availableFolders, setAvailableFolders] = useState([]);
  const [images, setImages] = useState([]);
  const [imageFolders, setImageFolders] = useState([]);


  useEffect(() => {
    if (folders.folders) {
      console.log(folders.folders);
      setImageFolders(folders.folders)
    }
  }, [folders])
  console.log(imageFolders);

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
      // TODO handle routing!
      // router.push('/login');
    }
  }, []);

  const {mutate: uploadImage} = useMutate({
    verb: 'POST',
    path: 'http://localhost:3001/api/image-upload',

  });

  const handleSelectImage = (e) => {
    setSelectedImage(e.target.files[0]);
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

  useEffect(() => {
    if (selectedFolder && selectedImage) {
      setCanUpload(true);
    }
  }, [selectedFolder, selectedImage]);

  if (admin && imageFolders) {

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
          onChange={handleSelectImage}
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

        <h5>Select Folder</h5>
        <div className={styles.radioGroup}>
          {imageFolders.length > 0 && imageFolders.map((folder, key) => {
            console.log('in the map');
            return (
              <div key={key}>
                <label htmlFor={key}>
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
          {/*<label htmlFor={'folderChoice1'}>*/}
          {/*  Caninae*/}
          {/*</label>*/}
          {/*<input type={'radio'}*/}
          {/*       checked={selectedFolder === 'caninae'}*/}
          {/*       id={'folderChoice1'}*/}
          {/*       name={'folderSelection'}*/}
          {/*       value={'caninae'}*/}
          {/*       onChange={handleSelectFolder}/>*/}
          {/*<label htmlFor={'folderChoice2'}>*/}
          {/*  Flora*/}
          {/*</label>*/}
          {/*<input*/}
          {/*  type={'radio'}*/}
          {/*  checked={selectedFolder === 'flora'}*/}
          {/*  id={'folderChoice2'}*/}
          {/*  name={'folderSelection'}*/}
          {/*  value={'flora'}*/}
          {/*  onChange={handleSelectFolder}/>*/}
          {/*<label htmlFor={'folderChoice3'}>*/}
          {/*  Woodlands*/}
          {/*</label>*/}
          {/*<input*/}
          {/*  type={'radio'}*/}
          {/*  checked={selectedFolder === 'woodlands'}*/}
          {/*  id={'folderChoice3'}*/}
          {/*  name={'folderSelection'}*/}
          {/*  value={'woodlands'}*/}
          {/*  onChange={handleSelectFolder}/>*/}
          {/*<label htmlFor={'folderChoice4'}>*/}
          {/*  Structural*/}
          {/*</label>*/}
          {/*<input*/}
          {/*  type={'radio'}*/}
          {/*  checked={selectedFolder === 'structural'}*/}
          {/*  id={'folderChoice4'}*/}
          {/*  name={'folderSelection'}*/}
          {/*  value={'structural'}*/}
          {/*  onChange={handleSelectFolder}/>*/}
          {/*<label htmlFor={'folderChoice5'}>*/}
          {/*  Misfits*/}
          {/*</label>*/}
          {/*<input*/}
          {/*  type={'radio'}*/}
          {/*  checked={selectedFolder === 'misfits'}*/}
          {/*  id={'folderChoice5'}*/}
          {/*  name={'folderSelection'}*/}
          {/*  value={'misfits'}*/}
          {/*  onChange={handleSelectFolder}/>*/}
        </div>
        <form onSubmit={handleAddNewFolder}>
          <label htmlFor={'newFolderChoice'}>
            <h5>Or Create a New Folder</h5>
            <input
              type={'text'}
              id={'newFolderChoice'}
              name={'newFolder'}
              value={newFolder} onChange={handleNewFolderChanges}/>
          </label>
          <button type={'submit'}>Confirm New Folder</button>
        </form>

        <h5>Upload Image</h5>
        <IconButton
          disabled={!canUpload}
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


// ImageUpload.getInitialProps = async ({req}) => {
//   const cookies = parseCookies(req);
//
//   return {
//     token: cookies.token,
//   };
// };

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

