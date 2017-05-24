var express = require("express");
var app = express();

var port = 2000;

app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine', 'ejs')

app.get('/',function(req,res){
	res.render('index');
})

app.get('/Books', function(req,res){
	res.send("this is book")
})
app.listen(port, function(){
	console.log("running"+port);
})
