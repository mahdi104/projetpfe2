const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  etablissement: {
    type: String,
  },
  status: {
    type: String,
  },
  // cart:{
  //   type:Array, 
  //   default:[]
  // }
});

module.exports = User = mongoose.model("user", UserSchema);