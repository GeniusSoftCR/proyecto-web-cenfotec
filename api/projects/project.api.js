var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	//////////////////////////////
	Schema = mongoose.Schema,
	//////////////////////////////
	states = ['inRevision'];

var projectSchema = new Schema({
	idNum : {type: String, required: true},
	projName : {type: String, required: true},
	enterName : {type: String, required: true},
	emailProj : {type: String, required: true},
	inCharge : {type: String, required: true},
	money: {type: String, required: true}
}, {collection : 'projects'});

var Project = mongoose.model('Project', projectSchema):

//API
router.get('/projects' function(req, res, next){
	Project.find({}, function(err, projects){
		res.json(projects);
	});
});
router.post('/project/add', function(req, res, next){
	var project = new Project();

	project.idNum = req.body.idNum;
	project.projName = req.body.projName;
	project.enterName = req.body.enterName;
	project.emailProj = req.body.emailProj;
	project.inCharge = req.body.inCharge;
	project.money = req.body.money;

	console.log('PROJECT REQUEST' + req.body.role);

	console.log(project.projName);
	
	project.save(function(err){
		if(err){
			res.json({succes: false, massage: 'Solicitud no enviada'});
		}else{
			res.json({success: true, massage: 'Solicitud enviada correctamente'})
		}
	});
});

module.exports = router;