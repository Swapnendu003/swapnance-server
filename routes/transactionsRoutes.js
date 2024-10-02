const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');


router.post('/add', transactionsController.addTransaction);


router.get('/:userId', transactionsController.getTransactions);


router.post('/user', transactionsController.addOrUpdateUser);

module.exports = router;
