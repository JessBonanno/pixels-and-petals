import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, {useContext, useEffect, useState} from 'react';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import axios from 'axios';
import cookie from 'js-cookie';
import Navigation from '../components/nav/nav';
import Footer from '../components/footer/footer';
import Hero from '../components/home/hero/hero';
import About from '../components/home/about/about';
import Gallery from '../components/home/gallery/gallery';
import Testimonial from '../components/home/testimonial/testimonial';
import {parseCookies} from '../services/parseCookies';
import {Context} from '../context/index';

export default function Home ({folders}) {

  const {imageFolders, setImageFolders} = useContext(Context)

  useEffect(() => {
    setImageFolders(folders)
  }, [])

  console.log(imageFolders);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navigation/>

      <main className={styles.main}>
        <Hero/>
        <About/>
        <Gallery/>
        <Testimonial/>
      </main>
      <Footer/>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/jesscodes/folders/pixels`)
//   const folders = await res.json()
//   return {
//     props: {
//       folders,
//     }
//   }
// }
