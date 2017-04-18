//Dependencias
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UsersSchema = require('./user.model.js');
var User = mongoose.model('User', UsersSchema);

//API General
router.get('/users', function(req, res, next) {
  User.find({}, function(err, users){
    res.json(users);
  });
});

//CAMBIO HECHO POR ESTEBAN
router.put('/users/update???', function(req, res, next) {
  User.findByIdAndUpdate(req.body.id,{$set:req.body}, function(err, users){
    res.json({success: false, message: 'Ha ocurrido un error'});
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
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

//module router -- we specify this to declare to server
module.exports = router;