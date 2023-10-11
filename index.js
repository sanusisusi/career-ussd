{/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
console.log(error);
});
database.once("connected", () => {
console.log("Database connected...");
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
console.log("What's popping? We're connected");
});*

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;

// Ensure that the MongoDB connection string starts with "mongodb://" or "mongodb+srv://"
if (!mongoString.startsWith("mongodb://") && !mongoString.startsWith("mongodb+srv://")) {
  console.error("Invalid MongoDB connection string. It should start with 'mongodb://' or 'mongodb+srv://'");
  process.exit(1); // Exit the process if the connection string is invalid
}

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

database.once("connected", () => {
  console.log("Database connected...");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("What's popping? We're connected");
});*/}

// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ussdRouter = require('./src/ussd/ussdRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/ussd', ussdRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
