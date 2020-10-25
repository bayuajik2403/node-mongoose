const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   email: {
       type: String,
       unique: true,
       trim: true,
       minlength: 3,
       required: true
   }, 
   password: {
       type: String,
       minlength: 8,
       required: true
   }
});

module.exports = mongoose.model('user', UserSchema)