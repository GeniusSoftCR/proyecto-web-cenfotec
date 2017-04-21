var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	//////////////////////////////
	Schema = mongoose.Schema,
	//////////////////////////////
	states = ['inRevision', 'aproved', 'reject', 'inProcess', 'ended'];

var projectSchema = new Schema({
	idNum :       {type: String, required: true},
	name :        {type: String, required: true},
	client:       {
					companyName : {type: String, required: true},
					email :       {type: String, required: true},
					manager :     {type: String, required: true},
					industry:     {type: String, required: true}
				  },
	money:        {type: String, required: true},
	state:        {type: String, required: true, em:states},
	images:        [{url : {type: String}}],
	////////////////////////////////////////////
	students:     {type: Array},
	professor:    {type: String},
	assitant:     {type: String}

}, {collection : 'projects'});

var Project = mongoose.model('Project', projectSchema);

//API
router.get('/projects/load', function(req, res, next) {
  Project.find({}, function(err, projects){
    res.json(projects);
  });
});

router.post('/projects/add', function(req, res, next){

	var project = Object.assign(new Project(),req.body)

	console.log(project);
	  
	project.save(function(err){
		if (err) {
      		res.json({success: false, message: 'Ha ocurrido un error'});
    	} else {
      		res.json({success: true, message: 'Se ha enviado el usuario correctamente'});
    	}
	})
});

module.exports = router;