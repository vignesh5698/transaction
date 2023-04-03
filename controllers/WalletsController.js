const mongoose = require("mongoose");
const { walletsFieldValidator } = require("../utils/walletsFieldValidator");
const WalletSchema = require("../models/WalletModel");

const WalletModel = mongoose.model("wallet-schema", WalletSchema);

const createWallet = (req, res) => {
  const { userId, amount, name, description } = req.body;

  // validators
  const isValidReqObject = walletsFieldValidator().validate({
    userId,
    amount,
    name,
    description,
  });

  if (isValidReqObject) {
    try {
      const wallet = new WalletModel(req.body);
      wallet
        .save()
        .then((savedWallet) => {
          console.log("New wallet added:", savedWallet);
          res.json({
            status: "success",
            data: savedWallet,
          });
        })
        .catch((error) => res.json(error));
    } catch (error) {
      res.json(error);
    }
  }
};

const updateWallet = (req, res) => {
  const { uid } = req.body;

  WalletModel.findOneAndUpdate(
    { uid },
    req.body,
    { new: true },
    (err, Wallet) => {
      if (err) {
        res.json(err);
      }
      res.json({
        status: "success",
        data: Wallet,
      });
    }
  );
  // .then((savedWallet) => {
  //   console.log("Wallet updated:", savedWallet);
  //   res.json({
  //     status: "success",
  //     data: savedWallet,
  //   });
  // })
  // .catch((error) => res.json(error));
};

module.exports = { createWallet, updateWallet };
