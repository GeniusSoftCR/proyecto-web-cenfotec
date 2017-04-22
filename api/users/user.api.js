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
  avatar:       {type: String, required: true},
  password:     {type: String, required: true},
  confirmPassword:{type: String, required: true},
  state:        {type: String, required: true, em:states},
  role:         {type: String, required: true, em:roles },
  username:     {type: String},
  //Student only
  birthdate:     {type: Date, required: true},
  careers:       {type: Array, required: true},
  justification: {type: String, default: null},
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
router.put('/user', function(req, res, next) {
  User.findOne(req.body, function(err,user) {
    if (user) {      
      switch(user.state){
        case "eligible" || "active" || "inactive":
          user.password = undefined;
          res.json(user);
        break;
        
        case "postulate":
          res.json({"error":"Solicitud de registro en revisión","succes":true});
        break;  

        case "banned":
          res.json({"error":"Usuario bloqueado, contacte administrador","succes":true});
        break;

        case "rejected":
          res.json({"error":"Solicitud de registro rechazada","succes":true});
        break;  
      }
    }else{
      res.json({"error":"Los datos ingresados son incorrectos"});
    };
  });
});

//busca los usuarios estudiantes
router.get('/users/students', function(req, res, next) {
  User.find({'role':'student'}, function(err, users){
    res.json(users);
  });
});
//procesar solicitudes de estudiantes
router.put('/user/students/update', function(req, res, next) {
  User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success: false, msg: 'Ha ocurrido un error'});
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
});

//registrar usuarios
router.post('/user/add', function(req, res, next) {  
  var user = Object.assign(new User())

  // user._id = mongoose.Schema.Types.ObjectId
  user.idNum = req.body.idNum;
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.secondSurname = req.body.secondSurname;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.avatar = req.body.avatar;
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.state = req.body.state;
  user.role = req.body.role;

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
  
  console.log(user)  

  user.save(function(err){
    if (err) {
      res.json({success: false, message: 'Ha ocurrido un error', error: err});
    } else {
      res.json({success: true, message: 'Se ha enviado el usuario correctamente'});
    }
  });
});

//module router -- we specify this to declare to server
module.exports = router;