import Head from 'next/head';
import styles from './index.module.css';
import React, {useEffect, useState} from 'react';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import axios from 'axios';
import cookie from 'js-cookie';
import {useRouter} from 'next/router';

export default function Login () {
  const router = useRouter();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('You are not logged in');

  const cookieOptions = {
    httpOnly: process.env.NODE_ENV !== 'development',
    secure: process.env.NODE_ENV !== 'development',
    signed: process.env.NODE_ENV !== 'development',
  };


  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };


  const submitForm = async () => {
    try {
      const res = await axios.post('api/login', user);
      const token = res.data.token;
      if (token) {
        console.log(token);
        cookie.set('token', token, cookieOptions);
        const json = jwt.decode(token);
        if (json.admin) {
          setMessage(`Welcome ${json.username}`);
          localStorage.setItem('token', res.data.token);
          router.push('/image-upload')
        }
      } else {
        setMessage('Something went wrong');
      }
    } catch (err) {
      setMessage('Unauthorized');
    }
  };

  const handleLogout = async () => {
    const res = await axios.post('/api/logout');
    console.log(res);
    localStorage.clear();
    cookie.remove('token');
    setMessage('You are not logged in');
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1>{message}</h1>
        <form method={'POST'} action={'/api/login'}>
          <input type={'text'} name={'username'} value={user.username}
                 onChange={handleChanges}/>
          <br/>
          <input type={'password'} name={'password'} value={user.password}
                 onChange={handleChanges}/>
          <br/>
          <input type={'button'} value={'Login'} onClick={submitForm}/>
        </form>
        <button onClick={handleLogout}>Logout</button>
      </main>
    </div>
  );
}
