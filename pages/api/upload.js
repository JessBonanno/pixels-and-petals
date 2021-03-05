require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const KEY = process.env.COOKIE_SECRET;


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser(KEY));





const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];
const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATS.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type!'), false);
    }
  }
});
const singleUpload = upload.single('image');

const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({message: 'Image upload fail!'});
    }
    next();
  });
};
const path = require('path');
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
const formatBufferTo64 = (file) => {
  return parser.format(path.extname(file.originalname).toString(), file.buffer);
};


const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_API_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});
const cloudinaryUpload = (file, folderName) => {
  return cloudinary.uploader.upload(file, {folder: `Pixels/${folderName}`});
};

var result = [];

export default async function (req, res) {
  const {folder} = req.body;
  const options = {
    resource_type: "image",
    max_results: 500
  };
  await cloudinary.api.resources(options, function (error, response) {
    if (error) {
      console.log(error);
    }
    let resources;
    if (folder) {
      resources = response.resources.filter(resource => {
        return resource.public_id.includes(folder);
      });
    } else {
      resources = response.resources;
    }
    if (resources.length) {
      return res.status(200).json(resources);

    } else {
      return res.status(404).json({message: 'No images found'});

    }
  });
}


// app.post('/api/images', async (req, res, next) => {
//   const {folder} = req.body;
//   const options = {
//     resource_type: "image",
//     max_results: 500
//   };
//   await cloudinary.api.resources(options, function (error, response) {
//     if (error) {
//       console.log(error);
//     }
//     let resources;
//     if (folder) {
//       resources = response.resources.filter(resource => {
//         return resource.public_id.includes(folder);
//       });
//     } else {
//       resources = response.resources;
//     }
//     if (resources.length) {
//       return res.status(200).json(resources);
//
//     } else {
//       return res.status(404).json({message: 'No images found'});
//
//     }
//   });
//
// });


// app.post('/api/image-upload', singleUploadCtrl, async (req, res, next) => {
//   const folderName = req.body.folderName || 'samples';
//   if (req.body.token) {
//     const {admin} = jwt.verify(req.body.token, process.env.COOKIE_SECRET);
//     if (admin) {
//       try {
//         if (!req.file) {
//           throw new Error('Image is not present!');
//         }
//         const file64 = formatBufferTo64(req.file);
//         const uploadResult = await cloudinaryUpload(file64.content, folderName);
//         return res.json({
//           cloudinaryId: uploadResult.public_id,
//           url: uploadResult.secure_url
//         });
//       } catch (err) {
//         return res.status(422).send({message: err.message});
//       }
//     } else {
//       res.status(401).json({message: 'Unauthorized'});
//     }
//   }
// });
