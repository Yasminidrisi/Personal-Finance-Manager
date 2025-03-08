const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  const { amount, type } = req.body;
  try {
    const transaction = new Transaction({ userId: req.user.id, amount, type });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: "Transaction failed", error });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions", error });
  }
};