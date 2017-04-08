//Dependencias
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Definimos la Schema de mongoose info: http://mongoosejs.com/docs/guide.html
var Schema = mongoose.Schema;

//Creamos el elemento Schema
var movieSchema = new Schema({
  name:  {type: String, required: true, unique: true},
  genre: String,
  year:   String,
  image:   String
}, {collection: 'movies'});

//Creamos el modelo.
var Movie = mongoose.model('Movie', movieSchema);

//API General
router.get('/movies', function(req, res, next) {
  Movie.find({}, function(err, movies){
    res.json(movies);
  });
});

//localhost:3000/api/peliculas/nueva
//Creamos una pelicula por el api .put actualizar .delete eliminar
router.post('/movies/new', function(req, res, next) {
  var movie = new Movie();
  movie.name = req.body.name;
  movie.genre = req.body.genre;
  movie.year = req.body.year;
  movie.image = req.body.image;
  movie.save(function(err){
    if (err) {
      res.json({success: false, message: 'Ha ocurrido un error'});
    } else {
      res.json({success: true, message: 'Se ha enviado la pelicula correctamente'});
    }
  });
});

//module router -- we specify this to declare to server
module.exports = router;