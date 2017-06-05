var express = require("express");
var app = express();


var port = 2000;

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
var nav = [{
          link: '/',
          Text: 'Home'
        }, {
          link: '/Books',
          Text: 'Books'
        }, {
          link: '/author',
          Text: 'Author'
        }];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/Books', bookRouter)

app.get('/', function(req, res) {
  res.render('index', {
    title: 'node code',
    nav: nav
  });
});

app.get('/author', function(req, res) {
  res.send("this is authors ");
});
app.listen(port, function() {
  console.log("running" + port);
});