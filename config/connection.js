const expressAsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const connectDB = expressAsyncHandler( async () => {
      try{
            await mongoose.connect(process.env.CONNECTION_STRING)
            console.log("Database are connected !");
      }catch(error){
            console.log(error);
      }

})

module.exports = connectDB;