var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// access jQuery
app.use(bodyParser.urlencoded({ extended: true }));
// for use with angular
app.use(bodyParser.json());
var port = 5000;
//default will look for index.html
app.use(express.static('public'));

app.listen(port, function() {
    console.log('listening on port', port);

});