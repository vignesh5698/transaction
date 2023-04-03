const { createTransactions } = require("../controllers/TransactionsController");

const transactionRoutes = (app) => {
  app.route("/transaction").post(createTransactions);
};

module.exports = { transactionRoutes };
