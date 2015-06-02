require('colors');
var path = require('path');
var express = require('express');
var people = require(path.join(__dirname, 'data/people.json'));

var app = express();

app.use(express.static('client'));
app.use('/mockup/', express.static(path.join(__dirname, 'mockup')));

app.get('/', function(req, res) {
	res.sendFile('/client/app/index.html', { root: process.cwd() });
});

app.get('/api/people', function(req, res) {
    res.end(JSON.stringify(people, null, '    '));
});

if (process.env.NODE_ENV !== 'development') {
	app.enable('trust proxy');
}

var HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, function(err) {
    if (err) {
        throw err;
    }

    console.log(('HTTP server listening on port ' + HTTP_PORT).green);

    console.log('Landing:'.bold + ' http://localhost:' + HTTP_PORT);
    console.log('Mockup:'.bold + ' http://localhost:' + HTTP_PORT + '/mockup/');
    console.log('People data:'.bold + ' http://localhost:' + HTTP_PORT + '/api/people');
});