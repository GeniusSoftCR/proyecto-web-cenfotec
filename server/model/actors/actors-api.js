//Dependencias
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Definimos la Schema de mongoose info: http://mongoosejs.com/docs/guide.html
var Schema = mongoose.Schema;

//Creamos el elemento Schema
var actorSchema = new Schema({
  name:  {type: String, required: true, unique: true},
  lastname: String,
  birthday: Date,
  awards:   Number,
  image:   String
}, {collection: 'actor'});


//Nombre, apellido, fecha nac, premios, foto
//Creamos el modelo.
var Actor = mongoose.model('Actor', actorSchema);

//API General
router.get('/actor', function(req, res, next) {
  Actor.find({}, function(err, actor){
    res.json(actor);
  });
});

//localhost:3000/api/peliculas/nueva
//Creamos una pelicula por el api .put actualizar .delete eliminar
router.post('/actor/new', function(req, res, next) {
  var actor = new Actor();
  actor.name = req.body.name;
  actor.lastName = req.body.lastName;
  actor.birthday = req.body.birthday;
  actor.awards = req.body.awards;
  actor.image = req.body.image;
  actor.save(function(err){
    if (err) {
      res.json({success: false, message: 'Ha ocurrido un error'});
    } else {
      res.json({success: true, message: 'Se ha enviado la pelicula correctamente'});
    }
  });
});

//module router -- we specify this to declare to server
module.exports = router;