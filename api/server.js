//Definimos las dependencias
var
 express = require('express'),
 app = express(),
 path = require('path'),
 bodyParser = require('body-parser'),
 morgan = require('morgan'),
 mongoose = require('mongoose'),
 passport = require('passport'),
 //Variables del back de la aplicacion
 db = mongoose.connection,
 dburl = 'mongodb://admin:proyectoweb1@ds155130.mlab.com:55130/csh',
 port = 3000,
 server = app.listen(port,_server()),
 io = require('socket.io').listen(server);
 // io = socket.sockets;

//Se define la conexion con Mongoose
mongoose.connect(dburl);

//Connection events
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // Se conecto correctamente!
  console.log('mongo database conected');
});
 
io.sockets.on('connection', function (socket) {
  socket.emit('news', { msg: 'Hello client - from : server'});
  socket.on('echo', function (data) {
    console.log(data);
  });
});

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')));
//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
//Cross
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//Socket.io
app.use(function(req,res,next){
    req.io = io;
    next();
});

//We define files where we are gonna generated main routes for the app
var index = require('./index'),
    users = require('./users/user.api'),
    projects = require('./projects/project.api'),
    config = require('./config/config.api.js');
//

//Define Express Routes
app.use('/api', users);
app.use('/api', projects);
app.use('/api', config);
//app.use('/api', email);
app.use('/', index);
///////
//////
app.use(passport.initialize());  

module.exports = app;
////
//
///////////////////// + Private + ////////////////////////
function _server() {
	console.log('server started on port ' + port);
}