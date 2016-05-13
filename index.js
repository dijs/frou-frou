var express = require('express');
var vaccom = require('vaccom');

var serialOpen = vaccom.serialOpen;
var serialClose = vaccom.serialClose;
var moveForward = vaccom.moveForward;
var turnClockwise = vaccom.turnClockwise;
var turnCounterClockwise = vaccom.turnCounterClockwise;
var stopMotion = vaccom.stopMotion;
var wait = vaccom.wait;
var safeMode = vaccom.safeMode;

var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/static'));

app.get('/open', function (req, res) {
  serialOpen()
    .then(function() { return wait(500); })
    .then(function() { return safeMode(); })
    .then(function() { return wait(500); })
    .then(function() { return res.send('done'); })
    .catch(function(err) { return console.log(err.stack); })
});

app.get('/close', function (req, res) {
  serialClose()
    .then(function() { return res.send('done'); })
    .catch(function(err) { return console.log(err.stack); })
});

app.get('/turn/counter-clockwise', function(req, res) {
  turnCounterClockwise().then(function () {
    res.send('done');
  })
  .catch(function(err) { return console.log(err.stack); })
});

app.get('/turn/clockwise', function(req, res) {
  turnClockwise().then(function () {
    res.send('done');
  })
  .catch(function(err) { return console.log(err.stack); })
});

app.get('/move/forward', function(req, res) {
  moveForward(100).then(function () {
    res.send('done');
  })
  .catch(function(err) { return console.log(err.stack); })
});

app.get('/stop-motion', function(req, res) {
  stopMotion().then(function () {
    res.send('done');
  })
  .catch(function(err) { return console.log(err.stack); })
});

app.listen(port, function () {
  console.log('Started @ http://localhost:' + port);
});
