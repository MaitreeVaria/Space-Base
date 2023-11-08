require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const session=require('express-session');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname+"/public/homepage.html");
});


app.get('/solarsystem', function(req, res) {
    res.sendFile(__dirname+"/public/solar2.html");
});

app.get('/timeline', function(req, res) {
    res.sendFile(__dirname+"/public/timeline.html");
});

app.get('/currentupdates', function(req, res) {
    res.sendFile(__dirname+"/public/current_updates.html");
}); 

// let port = process.env.PORT;
let port = 3000;
http.listen(port, function() {
    console.log('Server is listening on port: ' + port);
});