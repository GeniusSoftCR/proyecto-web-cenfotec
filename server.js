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
var index = require('./server/index');
var movies = require('./server/model/movies/movies-api');
var users = require('./server/model/users/user-api');
var actors = require('./server/model/actors/actors-api');

//Set static Folder
app.use(express.static(path.join(__dirname, '/public')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

//Define Express Routes
app.use('/api', movies);
app.use('/api', users);
app.use('/api', actors);
app.use('/', index);

//Listen Server
app.listen(port, function(){
  console.log('server started on port ' + port);
});