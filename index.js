var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = express();
var connectionString = "postgres://benjaminbiggs@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance);
module.exports = app
//Possibly local files need to be required later
var controller = require('./controller.js');

controller.getPlanes();


app.use(bodyParser.json());
app.use(cors());

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
