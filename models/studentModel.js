const mongoose = require("mongoose");

const studentModel = mongoose.Schema({
      name : {
            type : String,
            require : [true, "Name field must required !"]
      },
      email : {
            type : String,
            require : [true, "Email field must required !"],
      },
      phone : {
            type : String,
            require : [true, "Phone noumber must required !"],
      },
      location : String,
      photo : String
},{timestamps : true})

module.exports = mongoose.model("Student_collection", studentModel);