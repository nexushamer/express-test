const PORT = process.env.PORT || 3000;

var sass = require('node-sass-middleware')
var path = require('path');
var configurationRouter = require('./configs/router');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(sass({
  src: __dirname + '/public/sass',
  dest: __dirname + '/public/css',
  debug: true,
  force: true,
  outputStyle: 'expanded',
  prefix: '/css'
}));

app.use('/public', express.static(path.join(__dirname, '/public')));

app.engine('html', require('ejs').renderFile);

configurationRouter.route(app);

var server = app.listen(PORT, function () {
  console.log('The server is running');
});