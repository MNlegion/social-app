const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
// const { fileURLToPath } = require('url');
// const { dirname } = require('path');
const register = require('./controllers/auth/register');

// currently have not installed cors
// const cors = require('cors');

dotenv.config();

// MongoDB Connection
connectDB();


// Configs and Middleware
// filename and dirname may not be needed due to not setting type: module in package.json
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);



const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// File Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Routes with files
app.post('/auth/register', upload.single('picture'), register);



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`.bgBlack.magenta);
});