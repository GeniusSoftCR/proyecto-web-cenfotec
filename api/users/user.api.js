//Dependencias
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    bcrypt=require('bcryptjs'),
    ///////////////////////////////
    Schema = mongoose.Schema,
    //////////////////////////////

    states = ['postulate', 'eligible', 'active', 'inactive', 'rejected','banned'],
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
  //onfirmPassword:{type: String, required: true},
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

UsersSchema.pre('save', function(next) {  
  var user = this;

  if (!user.isModified('password')) return next();  

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

UsersSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var User = mongoose.model('User', UsersSchema);

router.post('/user/login', function(req, res, next) {
    var email = req.body.email || '';
    var password = req.body.password || '';

    if (email == '' || password == '') {
        return res.send(401);
    }

  User.findOne({email: email}, function(err, user) {
    if (err) throw err;
    // test a matching password   
    user.comparePassword(password, function(err, isMatch) {

      if (err) throw err;
      if (!isMatch) {         
        console.log('Attempt failed to login with: ' + user.username);
        res.json({"error":"Los datos ingresados incorrectos"});
      }else{
        console.log('Password'+password+': ', isMatch); // -> Password123: true
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
        };
      };  
    });
  });  
});

//API General

// API method -> return ALL users 
router.get('/users', function(req, res, next) {
  User.find({}, function(err, users){
    res.json(users);
  });
});
// API method -> search user with object as filter -> return all matched users
router.put('/users/search', function(req, res, next) { 
  User.find(req.body, function(err,result) {
    res.json(result);
  });
});

router.put('/user', function(req, res, next) { 
  User.findOne(req.body, function(err,user) {
    res.json(users);
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
  var user = Object.assign(new User(), req.body)
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