import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faHighlighter, faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import {faImage, faFileImage} from '@fortawesome/free-regular-svg-icons'

library.add(
  faCode,
  faHighlighter,
  faImage,
  faFileImage,
  faCloudUploadAlt,
)


function MyApp ({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;
