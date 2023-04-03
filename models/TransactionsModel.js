const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionsSchema = new Schema({
  tId: {
    type: String,
    required: true,
  },
  tAmount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
  },
  walletUid: {
    type: String,
    required: true,
  },
});

module.exports = TransactionsSchema;
