const Transaction = require('../models/TransactionSchema');
const User = require('../models/UserSchema');

exports.addTransaction = async (req, res) => {
  try {
    const { userId, type, category, amount } = req.body;


    const newTransaction = new Transaction({
      userId,
      type,
      category,
      amount,
      date: new Date(),
    });
    await newTransaction.save();

    res.status(201).json({ message: 'Transaction added successfully', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ message: 'Error adding transaction', error });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { userId } = req.params;

    
    const transactions = await Transaction.find({ userId });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};
exports.addOrUpdateUser = async (req, res) => {
  try {
    const { name, totalIncome } = req.body;

    let user = await User.findOne({ name });
    if (!user) {
      user = new User({ name, totalIncome });
    } else {
      user.totalIncome = totalIncome;
    }
    await user.save();
    res.status(200).json({ message: 'User details added/updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error adding/updating user details', error });
  }
};
