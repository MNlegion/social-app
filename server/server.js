const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Error handling


app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgBlack.magenta);
});