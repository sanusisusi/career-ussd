// src/ussd/ussdRouter.js
const express = require('express');
const exploreCareersRouter = require('../../routes/exploreCareers');
const careerAdviceRouter = require('../../routes/careerAdvice');
const contactUsRouter = require('../../routes/contactUs');

const ussdRouter = express.Router();

ussdRouter.use('/exploreCareers', exploreCareersRouter);
ussdRouter.use('/careerAdvice', careerAdviceRouter);
ussdRouter.use('/contactUs', contactUsRouter);

module.exports = ussdRouter;
