const mongoose = require("mongoose");
const dotenv = require("dotenv").config;

mongoose.set("strictQuery", false);

const ConnectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected to ${con.connection.host}`);
  } catch (err) {
    console.log(`Error:${err.message}`);
    process.exit();
  }
};
module.exports = ConnectDB;
