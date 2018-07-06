var express = require('express');

var app = express();

var jsonData = {count: 12, message:'hey'};
    // res.sendFile takes an absolute path to a file and
    // sets the mime type based n the file extname.

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html', function(err){
        if(err){
            res.status(500).send(err);
        }
    })
});

app.get('/data', function(req,res){
    res.json(jsonData);
});


var port = 3000;

app.listen(post, function(){
    console.log('listening on the http://localhost:', port);
});

