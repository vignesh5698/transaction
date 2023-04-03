const mongoose = require("mongoose");
const Transactions = require("../models/TransactionsModel");

const TransactionsModel = mongoose.model("trasctions", Transactions);
const WalletModel = mongoose.model("wallet-schema", WalletSchema);

const session = await mongoose.startSession();
session.startTransaction();

const createTransactions = (req, res) => {
  const { walletId, tId, tAmount, } = req.body;
  try {
    const wallet = await WalletModel.findOne({ walletId  }).session(session);
    wallet.amount += 100;

    await wallet.save();
    const transaction = new TransactionsModel({
      tId,
      walletUid: walletId,
      tAmount: tAmount,
    });

    await transaction.save();
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    res.json(error);
  }
};

module.exports = { createTransactions };
