// routes/contactUs.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { text } = req.body;
  let response = '';

  switch (text) {
    case '1':
      response = 'CON Contact Career Guidance:\nEmail: info@careerguidance.com\nPhone: +123456789';
      break;
    case '2':
      response = 'END Thank you for contacting us.';
      break;
    // Add more cases as needed...

    default:
      response = 'END Invalid input. Please try again.';
  }

  res.send(response);
});

module.exports = router;
