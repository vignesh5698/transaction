const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const { walletRoutes } = require("./routes/wallet");
const { transactionRoutes } = require("./routes/transaction");

const app = express();

//  mongo connection
mongoose.Promise = global.Promise;
const MONGODB_URI =
  "mongodb+srv://database:password.mongodb.net/test-run?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//  body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//  CORS setup
app.use(cors());

// routes
walletRoutes(app);
transactionRoutes(app);

app.get("/", (req, res) => {
  res.send("Health Check");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`My test applicaiton running on ${PORT}`);
});
