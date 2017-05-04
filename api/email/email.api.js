var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var dotenv = require('dotenv'); 

dotenv.load(); //load environment variables from .env into ENV (process.env).

var sendgrid_username = process.env.CenfotecSoftwareHouse;
var sendgrid_password = process.env.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;

var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
var email      = new sendgrid.Email();

var app = express();
app.use(bodyParser.json()); //needed for req.body
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); 

app.post('/email', function(req, res) {
    email.addTo(req.body.to);
    email.setFrom(req.body.from);
    email.setSubject(req.body.subject);
    email.setText(req.body.text);
    email.addHeader('X-Sent-Using', 'SendGrid-API');
    email.addHeader('X-Transport', 'web');

    sendgrid.send(email, function(err, json) {
    if (err) { 
        return res.send("Problem Sending Email!!!!");
    }
        console.log(json);
        res.send("Email Sent OK!!!!");
    });
});
var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port')  ) ;
});