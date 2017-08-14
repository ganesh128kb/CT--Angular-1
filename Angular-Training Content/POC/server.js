var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/', function (req, res) {
    res.redirect('/index.html');
});

var data = {
    "data": [
        {
            "name": "John",
            "pr1": "100",
            "pr2": "80",
            "pr3": "70"
            },
        {
            "name": "Smith",
            "pr1": "90",
            "pr2": "70",
            "pr3": "120"
            },
        {
            "name": "Jane",
            "pr1": "80",
            "pr2": "90",
            "pr3": "100"
            },
        {
            "name": "Rocky",
            "pr1": "60",
            "pr2": "80",
            "pr3": "70"
            }
        ]
}
app.get('/users', function (req, res) {
    res.status(200).send(data);
});
app.post('/users', function (req, res) {

    console.log(req.body);
    data.data.push(req.body);
    res.status(200).send(data);
});
app.listen(8081);