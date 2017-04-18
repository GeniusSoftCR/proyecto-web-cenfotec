//Dependencias
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/////////////////////////////////////////////////
var Schema = mongoose.Schema;

var states = ['inRevision'];
var roles = ['admin','professor','assistant','student'];

var UsersSchema = new Schema({  
  // _id  :        ObjectId,
  idNum :       {type: String, required: true},
  name:         {type: String, required: true},
  surname:      {type: String, required: true},
  secondSurname:{type: String, required: true},  
  email:        {type: String, required: true,  unique: true},
  username:     {type: String, required: true,  unique: true},
  phone:        {type: String},
  avatar:       {type: String},
  password:     {type: String, required: true},
  state:        {type: String, required: true, em:states},
  role:         {type: String, required: true, em:roles },
  //Student only
  birthdate:     {type: Date, default:null},
  careers:       {type: Array, default:null},
  justification: {type: String, default:null},
  resumeUrl:     {type: String, default:null},
  githubUrl:     {type: String, default:null},
  websiteUrl:    {type: String, default:null},
  //Professor only
  specialty:     {type: String, default:null},
  //Admin and assitant olny
  jobPosition:   {type: String, default:null}

}, {collection: 'users'});


var User = mongoose.model('User', UsersSchema);

//API General
router.get('/users', function(req, res, next) {
  User.find({}, function(err, users){
    res.json(users);
  });
});
//localhost:3000/api/user/add

router.post('/user/add', function(req, res, next) {

  
  var user = new User();

  // user._id = mongoose.Schema.Types.ObjectId
  user.idNum = req.body.idNum;
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.secondSurname = req.body.secondSurname;
  user.password = req.body.password;
  user.email = req.body.email;
  user.username = req.body.username;
  user.phone = req.body.phone;
  user.avatar = req.body.avatar;
  user.state = req.body.state;  
  //User Roles
  user.role = req.body.role;



  console.log('USER ROLE ++++++++++++++++++++++++++++++++++++++++++'+req.body.role)
  switch (user.role){
    case 'student':
      user.birthdate     = req.body.birthdate;
      user.careers       = req.body.careers;
      user.justification = req.body.justification;
      user.resumeUrl     = req.body.resumeUrl;
      user.githubUrl     = req.body.githubUrl;
      user.websiteUrl    = req.body.websiteUrl;
      break;
    case 'professor':
      user.specialty    = req.body.specialty;
      break;
    case 'admin' || 'assistant':
      user.jobPosition = req.body.jobPosition;
      break;
  }
  console.log(user.name)  

  user.save(function(err){
    if (err) {
      res.json({success: false, message: 'Ha ocurrido un error'});
    } else {
      res.json({success: true, message: 'Se ha enviado el usuario correctamente'});
    }
  });
});

//module router -- we specify this to declare to server
module.exports = router;