const User = require('../models/parking');
const { StatusCodes } = require('http-status-codes');
const asyncWrapper = require('../middleware/async');

const arrivedCar = asyncWrapper(async (req, res) => {
  const car = await User.create(req.body);
  const price = req.body.price;
  if (!price) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: true, message: 'wallet is running low on balance' });
  }
  res.status(201).json({ car });
});

const leavedCar = asyncWrapper(async (req, res) => {
  const car = await User;
});

const nextTimeArrived = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  if (!id) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: true, message: 'Car Id not arrived before' });
  }
  res.status(StatusCodes.OK).json({ msg: 'Discount given 8% of the Owner' });
});

module.exports = {
  arrivedCar,
  leavedCar,
  nextTimeArrived,
};
