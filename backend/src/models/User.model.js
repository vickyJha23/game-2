const { string, required } = require("joi");
const mongoose = require("mongoose");


const userSchema =  new mongoose.Schema({
      userName: {
        type: String,
         required: true,
         unique: true,
         trim: true
      },
      email: {
         type: String,
         required: true,
         lowercase: true,
         unique: true
      },
      password: {
           type:String,
           required: true,
           minlength: 6,
           maxlength: 12
      },
      profilePicture: {
         type: string,
          required:true
      },
      role: {
         type: String,
         enum: ["admin"],
         required: true   
      }  

}, {
      timestamps: true
})

const User = mongoose.model("User", userSchema);
module.exports = User;