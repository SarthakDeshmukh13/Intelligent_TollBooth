const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db/connect');
const discountRoute = require('./routes/discountRoute');

app.use(express.json());

// routes

// app.get('/', (req, res) => {
//   res.send('Welcome');
// });

app.use('/api/v1/cars', discountRoute);

port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await console.log('Connected to Database');
    await app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
