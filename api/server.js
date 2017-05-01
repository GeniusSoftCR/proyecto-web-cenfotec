	//Definimos las dependencias
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	//Variables del back de la aplicacion
	app = express(),
	port = 3000,
	dburl = 'mongodb://admin:proyectoweb1@ds155130.mlab.com:55130/csh';


//Se define la conexion con Mongoose
mongoose.connect(dburl);

//Se revisa el estado de coneccion de la BD
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // Se conecto correctamente!
  console.log('mongo database conected');
});

//We define files where we are gonna generated main routes for the app
var index = require('./index'),
	users = require('./users/user.api'),
	projects = require('./projects/project.api'),
	config = require('./config/config.api.js');

	
// Set static Folder
// app.use(express.static(path.join(__dirname, 'public')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//Define Express Routes
app.use('/api', users);
app.use('/api', projects);
app.use('/api', config);
app.use('/', index);

app.listen(port, function(){
  console.log('server started on port ' + port);
});