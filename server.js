const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

// connect to DB
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("DB Connected successfully✌️"))
  .catch((err) => console.log("DN not able to connect❌", err));

// creating a server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on the port ${port}`);
});
