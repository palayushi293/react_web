

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Users = new Schema({
 // String is shorthand for {type: String}
  email: {
    type:String,
    unique:true
  },
  password: String,
 
  date: { type: Date, default: Date.now },
  
 
});
const m=mongoose.model('user',Users
    
);


module.exports=m;