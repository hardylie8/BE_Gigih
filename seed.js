const mongoose = require("mongoose");

const connectDB = require("./config/mongo");
const videoSeeder = require("./seeders/videoSeeder");
const userSeeder = require("./seeders/userSeeder");
const productSeeder = require("./seeders/productSeeder");
const commentSeeder = require("./seeders/commentSeeder");

const runSeeder = async () => {
  try {
    connectDB();
    const video = await videoSeeder();
    const user = await userSeeder();
    const product = await productSeeder();
    const comment = await commentSeeder();
    console.log("All seeders completed");
  } catch (e) {
    console.log(e);
  } finally {
    mongoose.connection.close();
  }
};
runSeeder();
