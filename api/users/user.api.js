//Dependencias
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    ///////////////////////////////
    Schema = mongoose.Schema,
    //////////////////////////////

    states = ['postulate', 'eligible', 'active', 'inactive', 'rejected','banned'];
    roles = ['admin','professor','assistant','student'];

var UsersSchema = new Schema({  
  // _id  :        ObjectId,
  idNum :       {type: String, required: true,minlength:9,maxlength:9},
  name:         {type: String, required: true},
  surname:      {type: String, required: true},
  secondSurname:{type: String, required: true},
  email:        {type: String, required: true, unique: true},
  phone:        {type: String, minlength:8,maxlength:8},
  avatar:       {type: String},
  password:     {type: String, required: true},
  confirmPassword:{type: String, required: true},
  state:        {type: String, required: true, em:states},
  role:         {type: String, required: true, em:roles },
  //Student only
  birthdate:     {type: Date},
  careers:       {type: Array},
  justification: {type: String},
  resumeUrl:     {type: String},
  githubUrl:     {type: String},
  websiteUrl:    {type: String},
  //Professor only
  specialty:     {type: String},
  //Admin and assitant olny
  jobPosition:   {type: String}

}, {collection: 'users'});


var User = mongoose.model('User', UsersSchema);

//API General
router.get('/users', function(req, res, next) {
  User.find({}, function(err, users){
    res.json(users);
  });
});


//CAMBIO HECHO POR ESTEBAN
router.get('/users/students', function(req, res, next) {
  //busca los usuarios estudiantes
  User.find({'role':'student'}, function(err, users){
    res.json(users);
  });
});
//Según Pablo
// router.get('/users/students2', function(req, res, next) {
//   //busca los usuarios estudiantes
//   User.find({'role':'student'}).then(function(err, users){
//     res.send(users);
//   });
// });
// module.exports.findAll = function(req,res){
//   User.find().then(function(users){
//     res.send(users);
//   });
// };
router.put('/user/students/update', function(req, res, next) {
  User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success: false, msg: 'Ha ocurrido un error'});
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
});


//localhost:3000/api/peliculas/nueva
//Creamos una pelicula por el api

//localhost:3000/api/user/add

router.post('/user/add', function(req, res, next) {  
  var user = new User();

  // user._id = mongoose.Schema.Types.ObjectId
  user.idNum = req.body.idNum;
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.secondSurname = req.body.secondSurname;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.avatar = req.body.avatar;
  user.password = req.body.password;
  user.birthdate = req.body.birthdate;
  user.careers = req.body.careers;
  user.justification = req.body.justification;
  user.resumeUrl = req.body.resumeUrl;
  user.githubUrl = req.body.githubUrl;
  user.websiteUrl = req.body.websiteUrl;
  user.confirmPassword = req.body.confirmPassword;
  user.state = req.body.state; 



//user = req.body

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