// routes/exploreCareers.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { text } = req.body;
  let response = '';

  switch (text) {
    case '1':
      response = 'CON Law Overview:\nLaw is a dynamic field that involves interpreting and applying laws.';
      break;
    case '1.1':
      response = 'CON Educational Requirements for Law:\nTo become a lawyer, you typically need a bachelor\'s degree followed by law school.';
      break;
    case '1.2':
      response = 'CON Career Opportunities in Law:\nLawyers can work in various fields such as criminal law, corporate law, etc.';
      break;
    // Add more cases as needed...

    default:
      response = 'END Invalid input. Please try again.';
  }

  res.send(response);
});

module.exports = router;
