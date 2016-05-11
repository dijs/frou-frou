var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/static'));

app.get('/turn/counter-clockwise', function(req, res) {
  res.send('done');
});

app.get('/turn/clockwise', function(req, res) {
  res.send('done');
});

app.get('/move/forward', function(req, res) {
  res.send('done');
});

app.get('/stop-motion', function(req, res) {
  res.send('done');
});

app.listen(3000);
