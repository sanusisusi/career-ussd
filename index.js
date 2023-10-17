// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ussdRouter = require('./src/ussd/ussdRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', ussdRouter);
console.log(ussdRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
