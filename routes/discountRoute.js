const express = require('express');
const router = express.Router();

const { arrivedCar, leavedCar } = require('../controllers/discountControllers');

router.route('/').post(arrivedCar).get(leavedCar);

module.exports = router;
