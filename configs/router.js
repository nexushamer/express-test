function route(app, webManagers) {
    app.get('/', function(req,res){
      //res.send('Hola sergio');

      let dataPage = {
        title:'Poker'
      };

      res.render('index', dataPage);
    });

    app.get('/about', function(req,res){
      res.send('aboutPage');
      //res.render('about.html');
    });

    app.post('/login', (req, res) => {
      console.log(req.body);

      var email   =   req.body.email;
      var password  = req.body.password;

      console.log(email);
      console.log(password);

      res.json({"done":"yes"});
      //res.render('account');
    });

    app.get('/users', (req, res) => {
       let userId = req.query.userId;

       console.log(userId);

       res.json({"done":"yes"});
    });

    app.post('/users/uploadFile', (req, res) => {
        console.log('The file will be updated');
        webManagers.upload(req,res,function(err) {
            console.log('callback fuynction is');
            if(err) {
                console.log(err);
                //return res.end("Error uploading file.");
                return res.json({"done":"Error uploading file."});
            }
            //res.end("File is uploaded");
            console.log('The file was load succesful');
            return res.json({"done":"The file was load succesful"});
        });
    });
}

module.exports.route = route;