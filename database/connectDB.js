const mongoose = require("mongoose");
require("dotenv").config();
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://tsunami:NWithjRurGQDcIhA@tsunami.ca8gf8u.mongodb.net/TTS_IKU?retryWrites=true&w=majority&appName=AtlasApp`,

      // "mongodb://127.0.0.1:27017/book-shop",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("success");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = { connect };
