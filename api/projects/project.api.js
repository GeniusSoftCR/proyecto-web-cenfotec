var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	//////////////////////////////
	Schema = mongoose.Schema,
	//////////////////////////////
	states = ['inRevision'];

var UserSchema = new Schema({
	idNum : {type: String, required: true},
	projName : {type: String, required: true},
	enterName : {type: String, required: true},
	emailProj : {type: String, required: true},
	inCharge : {type: String, required: true},
	money: {type: String, required: true},
})