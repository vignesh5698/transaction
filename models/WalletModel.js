const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WalletSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = WalletSchema;
