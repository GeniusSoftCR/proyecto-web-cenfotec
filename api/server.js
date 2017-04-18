//We define the required modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

//We define app variables
var app = express();
var port = 3000;
var dburl = 'mongodb://admin:proyectoweb1@ds155130.mlab.com:55130/csh';


//we define mongoose connection
mongoose.connect(dburl);

//We check BD connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('mongo database conected');
});

//We define files where we are gonna generated main routes for the app
var index = require('./index');
var users = require('./users/user.api');

	
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
app.use('/', index);

app.listen(port, function(){
  console.log('server started on port ' + port);
});