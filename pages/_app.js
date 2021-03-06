import React from 'react';
import App from 'next/app';
import {Provider} from '../context';

import '../styles/globals.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCode,
  faHighlighter,
  faCloudUploadAlt,
  faChevronLeft,
  faChevronRight,
  faUserAstronaut,
  faArrowUp,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import {
  faImage,
  faFileImage,
  faSmileWink,
  faImages,
  faHeart
} from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';

library.add(
  faCode,
  faHighlighter,
  faImage,
  faFileImage,
  faCloudUploadAlt,
  faSmileWink,
  faImages,
  faHeart,
  faInstagram,
  faChevronLeft,
  faChevronRight,
  faUserAstronaut,
  faArrowUp,
  faEllipsisV,
);


class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props;
    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

// ({Component, pageProps}) {
//   return (
//     <Component {...pageProps} />
//   );
// }


export default MyApp;
