const express = require("express");
const ConnectDB = require("./config/DBconfig");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require("path");
const catogoriesRoute = require("./routes/catogoriesRoute");
const productsRoute = require("./routes/productsRoute");

const app = express();

ConnectDB();

app.use(express.json());

app.use("/api/", productsRoute);
app.use("/api/", catogoriesRoute);

// serving frontend code

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
