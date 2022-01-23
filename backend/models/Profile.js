const mongoose = require('mongoose');

const ProfileSChema = new mongoose.Schema({
   username:{
       type: String,
       required: true,
   },
   firstname: {
      type: String,
      required: true,
   },
   lastname: {
       type: String,
       required: true,
   },
   id: {
       type: String,
       required: true,
   },
   image: {
       type: Buffer,
       required: true
   },
   email:{
       type: String,
       required: true
   },
   password: {
       type: String
   },
   isVerified: {
       type: Boolean,
       default: false,
   },
   googleId: {
       type: String,
   },
   provider: {
       type: String,
       required: true,
   }

}
 {timestamps: true}
);

module.exports = mongoose.model("Profile", ProfileSchema);