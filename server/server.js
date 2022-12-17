const express = require("express");
const ConnectDB = require("./config/DBconfig");
const dotenv = require("dotenv").config();
const cors = require("cors");
const catogoriesRoute = require("./routes/catogoriesRoute");
const productsRoute = require("./routes/productsRoute");

const app = express();

app.use(cors());
ConnectDB();

app.use(express.json());

app.use("/api/", productsRoute);
app.use("/api/", catogoriesRoute);

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
