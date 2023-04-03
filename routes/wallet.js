const {
  createWallet,
  updateWallet,
} = require("../controllers/WalletsController");

const walletRoutes = (app) => {
  app.route("/wallet").post(createWallet).put(updateWallet);
};

module.exports = { walletRoutes };
