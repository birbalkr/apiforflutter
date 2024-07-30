// uri=
// 'mongodb+srv://birbalkr1435:Birbal!@#123@myappapi.eqfuppm.mongodb.net/myappapi?retryWrites=true&w=majority&appName=myappapi'


const mongoose = require("mongoose");

const connectDB = (uri) => {
  // console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;












