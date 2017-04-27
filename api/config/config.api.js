var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	//////////////////////////////
	Schema = mongoose.Schema,
	//////////////////////////////
	grade = ['technical', 'diplomat', 'bachelor', 'bachelorsDegree', 'mastersDegree'];

var configSchema = new Schema({
	code : {type: String, required: true},
	name : {type: String, required: true},
	grade : {type: String, required: true}
	}, {collection : 'carrers'});

var Carrers = mongoose.model('Carrers', carrersSchema);

//Lleva la lista de carreras
router.get('/config/load', function(req, res, next){
	Carrers.find({}, function(err, carrers){
		res.json(carrers);
	});
});

//Registar Carrera
route.post('/config/add'), function(req, res, next){
	var carrer = Object.assign(new Carrers(),req.body)
	carrer.save(function(err){
		if(err){
			res.json({success: false, massage: 'Ha ocurrido un error'});
		}else{
			res.json({success : true, massage: 'Se ha enviado la carrera correctamente'})
		}
	})
}

module.exports = router;