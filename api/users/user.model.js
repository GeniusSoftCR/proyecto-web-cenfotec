var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema({
  name:  {
    type: String, 
    required: true
  },
  username: {
    type: String, 
    required: true, 
    unique: true
  },
  password: {
    type: String, 
    required: true, 
    unique: true
  },
  email: {
    type: String, 
    required: true, 
    unique: true
  }
}, {collection: 'users'});

