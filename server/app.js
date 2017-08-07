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
// used to store latest result
var mathResult = 0;
//do calculation and store in MathResult
app.post('/calculator', function(req, res) {
        console.log(req.body);
        // number validation here
        var firstNumber = parseInt(req.body.x);
        var secondNumber = parseInt(req.body.y)
        switch (req.body.opp) {
            case 'add':
                mathResult = firstNumber + secondNumber;
                break;
            case 'subtract':
                mathResult = firstNumber - secondNumber;
                break;
            case 'multiply':
                mathResult = firstNumber * secondNumber;
                break;
            case 'divide':
                mathResult = firstNumber / secondNumber;
                break;
        }
        //store the mathResult
        // mathResult = firstNumber + secondNumber;
        res.sendStatus(200);
    })
    // request to ge mathResult
app.get('/calculator', function(req, res) {
    res.send({ result: mathResult });
})

app.listen(port, function() {
    console.log('listening on port', port);

});