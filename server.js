const PORT = process.env.PORT || 3000;

var sass = require('node-sass-middleware')
var path = require('path');
var configurationRouter = require('./configs/router');
var express = require('express');
var multer = require('multer');
var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file);
        callback(null, __dirname+'/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});
var upload = multer({ storage : storage}).single('userPhoto');

let webManagers = {
    upload:upload
}

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
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

configurationRouter.route(app, webManagers);

/*
var server = app.listen(PORT, function () {
    console.log('The server is running');
});
*/

/*
var keepsHisWord;
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
console.log(promise1);
*/

var crypto = require('crypto');

var generate_key = function() {
    var sha = crypto.createHash('sha256');
    sha.update(Math.random().toString());
    return sha.digest('hex');
};

console.log(generate_key());