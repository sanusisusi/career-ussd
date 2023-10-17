// routes/exploreCareers.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('CON Welcome to Career Guidance.\n1. Law\n2. Engineering\n3. Medicine\n4. Computing');
});

router.post('/1', (req, res) => {
  res.send('CON Law Overview:\nLaw is a dynamic field that involves interpreting and applying laws.');
});

router.post('/1.1', (req, res) => {
  res.send('CON Educational Requirements for Law:\nTo become a lawyer, you typically need a bachelor\'s degree followed by law school.');
});

router.post('/1.2', (req, res) => {
  res.send('CON Career Opportunities in Law:\nLawyers can work in various fields such as criminal law, corporate law, etc.');
});

// Add more routes for Law as needed...

router.post('/2', (req, res) => {
  res.send('CON Engineering Overview:\nEngineering involves the application of scientific and mathematical principles to design and build.');
});

router.post('/2.1', (req, res) => {
  res.send('CON Educational Requirements for Engineering:\nEngineers typically need a bachelor\'s degree in engineering.');
});

router.post('/2.2', (req, res) => {
  res.send('CON Career Opportunities in Engineering:\nEngineers can work in areas such as civil engineering, mechanical engineering, etc.');
});

// Add more routes for Engineering as needed...

router.post('/3', (req, res) => {
  res.send('CON Medicine Overview:\nMedicine is the science and practice of the diagnosis, treatment, and prevention of disease.');
});

router.post('/3.1', (req, res) => {
  res.send('CON Educational Requirements for Medicine:\nMedical doctors usually require a bachelor\'s degree and then attend medical school.');
});

router.post('/3.2', (req, res) => {
  res.send('CON Career Opportunities in Medicine:\nDoctors can specialize in various fields such as surgery, pediatrics, etc.');
});

// Add more routes for Medicine as needed...

router.post('/4', (req, res) => {
  res.send('CON Computing Overview:\nComputing involves the use of computers to process, manage, and analyze information.');
});

router.post('/4.1', (req, res) => {
  res.send('CON Educational Requirements for Computing:\nComputer scientists often need a bachelor\'s degree in computer science or a related field.');
});

router.post('/4.2', (req, res) => {
  res.send('CON Career Opportunities in Computing:\nComputing professionals can work as software developers, data scientists, etc.');
});

// Add more routes for Computing as needed...

module.exports = router;
