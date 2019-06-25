function route(app) {
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
}

module.exports.route = route;