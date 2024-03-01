const express = require('express');
const colors = require('colors');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgBlack.magenta);
});