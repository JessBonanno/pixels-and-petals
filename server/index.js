require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/api/test', (req, res) => {
  res.json({message: 'Hello World!'});
});

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
 return parser.format(path.extname(file.originalname).toString(), file.buffer)
}


const  cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_API_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
})
const cloudinaryUpload = file => {
 return cloudinary.uploader.upload(file)
}


app.post('/api/image-upload', singleUploadCtrl, async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error('Image is not present!');
    }
    const file64 = formatBufferTo64(req.file)
    const uploadResult = await cloudinaryUpload(file64.content);
    return res.json({cloudinaryId: uploadResult.public_id, url: uploadResult.secure_url});
  } catch (err) {
    return res.status(422).send({message: err.message});
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`> Connected to ${PORT}`));
