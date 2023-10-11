// routes/careerAdvice.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { text } = req.body;
  let response = '';

  switch (text) {
    case '1':
      response = 'CON Choosing a Career Path:\nChoosing the right career involves self-assessment, researching different industries, and considering your interests and skills.';
      break;
    case '2':
      response = 'CON Skill Development:\nEnhance your skills by taking online courses, attending workshops, and staying updated with industry trends.';
      break;
    case '3':
      response = 'CON Job Search Tips:\nSearching for a job can be made easier by networking, tailoring your resume for each application, and preparing for interviews.';
      break;
    // Add more cases as needed...

    default:
      response = 'END Invalid input. Please try again.';
  }

  res.send(response);
});

module.exports = router;
