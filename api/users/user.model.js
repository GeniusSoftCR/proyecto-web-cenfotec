// var ObjectId = Schema.ObjectId;

var states = ['inRevision'];
var roles = ['admin','professor','assistant','student'];

var usersSchema = new Schema({  
  // _id  :        ObjectId,
  idNum :       {type: String, required: true},
  name:         {type: String, required: true},
  surname:      {type: String, required: true},
  secondSurname:{type: String, required: true},  
  email:        {type: String, required: true,  unique: true},
  username:     {type: String, required: true,  unique: true},
  phone:        {type: String},
  avatar:       {type: String},
  password:     {type: String, required: true},
  state:        {type: String, required: true, em:states},
  role:         {type: String, required: true, em:roles },
  //Student only
  birthdate:     {type: Date, default:null},
  careers:       {type: Array, default:null},
  justification: {type: String, default:null},
  resumeUrl:     {type: String, default:null},
  githubUrl:     {type: String, default:null},
  websiteUrl:    {type: String, default:null},
  //Professor only
  specialty:     {type: String, default:null},
  //Admin and assitant olny
  jobPosition:   {type: String, default:null}

}, {collection: 'users'});








