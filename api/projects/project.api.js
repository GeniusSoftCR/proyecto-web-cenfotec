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
	money:        {type: String, required: true},
	objective:    {type: String, required: true},
	state:        {type: String, required: true, em:states},
	client:       {
					companyName : {type: String, required: true},
					email :       {type: String, required: true},
					manager :     {type: String, required: true},
					industry:     {type: String, required: true}
				  },
	resume:       {type: String},
	images:       [{url : {type: String}}],
	////////////////////////////////////////////
	students:     {type: Array},
	professor:    {type: String},
	assitant:     {type: String},
	hours:        {type: new Array},
	rejectReason: {type: String, default: undefined}

}, {collection : 'projects'});

var Project = mongoose.model('Project', projectSchema);

//API
//busca la lista de proyectos
// router.get('/projects/load', function(req, res, next) {
//   Project.find({}, function(err, projects){
//     res.json(projects);
//   });
// });
router.put('/projects/load', function(req, res, next) { 
  Project.find(req.body, function(err,results) {
  	if(err){
  		res.json({success: false, msg: 'Ha ocurrido un error'});
  	}else{
    	res.json(results);
  	}
  });
});
//procesar solicitudes de proyectos
router.put('/projects/update', function(req, res, next) {
  Project.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success: false, msg: 'Ha ocurrido un error'});
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
});

//Enviar Solicitud de proyecto
router.post('/projects/add', function(req, res, next){
	var project = Object.assign(new Project(),req.body)
	console.log(project);  
	project.save(function(err){
		if (err) {
      		res.json({success: false, message: 'Ha ocurrido un error'});
    	}else{
      		res.json({success: true, message: 'Se ha enviado el proyecto correctamente'});
    	}
	})
});

module.exports = router;