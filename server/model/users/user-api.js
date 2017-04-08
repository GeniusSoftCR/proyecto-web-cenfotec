//Dependencias
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Definimos la Schema de mongoose info: http://mongoosejs.com/docs/guide.html
var Schema = mongoose.Schema;

//Creamos el elemento Schema
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


//Creamos el modelo.
var User = mongoose.model('User', usersSchema);

//API General
router.get('/users', function(req, res, next) {
  User.find({}, function(err, users){
    res.json(users);
  });
});

//localhost:3000/api/peliculas/nueva
//Creamos una pelicula por el api
router.post('/users/new', function(req, res, next) {

  var user = new User();  

  user.name = req.body.name;
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;
  
  user.save(function(err){
    if (err) {
      res.json({success: false, message: 'Ha ocurrido un error'});
    } else {
      res.json({success: true, message: 'Se ha enviado el usuario correctamente'});
    }
  });
});


var cinemaTypeSchema = new Schema({
  name : {type:String, required:true}
},{collection: 'cinemaTypes'});

var cinemaType = mongoose.model('cinemaType', cinemaTypeSchema);

router.post('/cinema/new', function(req, res, next) {
  var cinemaTypeNew = new cinemaType();

  cinemaTypeNew.name ="normal";

  cinemaTypeNew.save(function(err){
    if (err) {
      res.json({success: false, message: 'Ha ocurrido un error'});
    } else {
      res.json({success: true, message: 'Se ha enviado el usuario correctamente'});
    }
  });
});





//module router -- we specify this to declare to server
module.exports = router;