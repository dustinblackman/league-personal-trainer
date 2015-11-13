var Promise = require('bluebird')
var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var helmet = require('helmet');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({extended: true, limit: '1000mb'}));
app.use(bodyParser.json({limit: '1000mb'}));
app.use(compression());
app.use(helmet());
app.use(express.static('build'));

// TODO: remove
app.get('/test', function(req, res) {
  res.json(require('./test.json'));
})

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


var port = process.env.PORT || 8000
console.log('Listening on port', port);
app.listen(port);
