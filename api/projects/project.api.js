var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	//////////////////////////////
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	//////////////////////////////
	states = ['inRevision', 'aproved', 'rejected', 'inProcess', 'ended'];


var projectSchema = new Schema({
	name :        {type: String, required: true},
	money:        {type: String, required: true},
	objective:    {type: String, required: true},
	state:        {type: String, required: true, em:states},
	client:       {
					companyName : {type: String, required: true},
					idNum :       {type: String, required: true},
					email :       {type: String, required: true},
					manager :     {type: String, required: true},
					industry:     {type: String, required: true},
					resume:       {type: String}
				  },
	images:       [{url : {type: String}}],

	////////////////////////////////////////////
	students:     [{_id:{type:ObjectId}}],
	professor:    {type: String, default: undefined},
	assistant:    {type: String, default: undefined},
	rejectReason: {type: String, default: undefined},
	anotations:[
		{
			author:		{type:ObjectId},
			date:		{type: Date, default: Date.now },			
			description:{type:String},
			tittle:		{type:String}

		}
	],
	files:[
		{
			author:	{type:ObjectId},
			date:	{type: Date, default: Date.now },		
			url:	{type:String},
			name:	{type:String}
		}
	]
}, {collection : 'projects'});

var Project = mongoose.model('Project', projectSchema);

//API
//busca la lista de proyectos
// router.get('/projects/load', function(req, res, next) {
//   Project.find({}, function(err, projects){
//     res.json(projects);
//   });
// });
router.put('/projects/filtered', function(req, res, next) { 
  Project.find({ $or:req.body}, function(err,results) {
  	if(err){
  		res.json({success: false, msg: 'Ha ocurrido un error'});
  	}else{
    	res.json(results);
  	}
  });
});
router.put('/projects/load', function(req, res, next) { 
  Project.find(req.body, function(err,results) {
  	if(err){
  		res.json({success: false, msg: 'Ha ocurrido un error'});
  	}else{
    	res.json(results);
  	}
  });
});
router.put('/projects/byTeacher', function(req, res, next) { 
  Project.find({ $or:[ {'professor':req.body.id}, {'assistant':req.body.id} ]}, function(err,results) {
  	if(err){
  		res.json({success: false, msg: 'Ha ocurrido un error'});
  	}else{
    	res.json(results);
  	}
  });
});
//procesar solicitudes de proyectos
router.put('/projects/update', function(req, res, next) {
	console.log(req.body)
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
      		res.json({success: false, message: 'Ha ocurrido un error, inténtelo de nuevo'});
    	}else{
      		res.json({success: true, message: 'Se ha enviado su solicitud de proyecto correctamente'});
    	};
	});
});


module.exports = router;