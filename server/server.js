const express = require("express");
const ConnectDB = require("./config/DBconfig");
const dotenv = require("dotenv").config();
const app = express();
const catogoriesRoute = require("./routes/catogoriesRoute");
const productsRoute = require("./routes/productsRoute");

ConnectDB();

app.use(express.json());

app.use("/api/", productsRoute);
app.use("/api/", catogoriesRoute);

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
