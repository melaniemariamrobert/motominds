var express = require('express'),
 app = express();
app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));

app.get('/', function(req, res){
  res.sendFile('/my_app/views/index.html');
});

app.listen(8080);
console.log('Listening...... ')
