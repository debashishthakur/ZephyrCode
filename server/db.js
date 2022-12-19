const mongoose = require("mongoose");
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://debashish_t:may211999@cluster0.bnyzjuc.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("Mongo DB Connection success");
  } catch (err) {
    console.log("Mongo DB Connection failed");
  }
}

module.exports = mongoose;
