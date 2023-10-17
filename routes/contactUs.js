// routes/contactUs.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('CON Contact Us:\n1. Email\n2. Phone');
});

router.post('/1', (req, res) => {
  res.send('END Email: sanusiabdulkadir00.com');
});

router.post('/2', (req, res) => {
  res.send('END Phone: +2348162844475');
});

module.exports = router;
