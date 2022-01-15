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
   county:{
       type: String,
       required: true,
   },
   image: {
       type: String,
       required: true
   },

}
 {timestamps: true}
)

module.exports = mongoose.model("Profile", ProfileSchema);