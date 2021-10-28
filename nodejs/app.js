var express = require('express');
var cors = require('cors');
var fs = require("fs");
var formidable = require("formidable");

var app = express();
app.use(cors());

app.use('/public', express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/upload', function (req, res) {

    var form = new formidable.IncomingForm();
    console.log("parse");

    form.parse(req, function(error, fields, files) {
        let file = files.qqfile;
        let imgSrc = file.path;
        let imgName = file.name;

        fs.writeFileSync(`public/${imgName}`, fs.readFileSync(imgSrc));
        res.send({"name:": imgName,"src":imgSrc, success: true});
    });

});

var server = app.listen(3000, function () {
    console.log('running on port of 3000');
})