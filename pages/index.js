import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, {useEffect, useState} from 'react';
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
import Contact from '../components/home/contact/contact';

export default function Home () {

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
        <Contact/>
      </main>

      {/*<Footer/>*/}
    </div>
  );
}
