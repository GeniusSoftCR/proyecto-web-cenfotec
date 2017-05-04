var express = require('express'),
	router = express.Router(),
    http = require('http'),
    bodyParser = require('body-parser'),
	dotenv = require('dotenv'); 

dotenv.load();

var sendgrid_username = process.env.CenfotecSoftwareHouse;
var sendgrid_password = process.env;

var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
var email      = new sendgrid.Email();

app.use(bodyParser.json()); //needed for req.body

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