var express = require('express'),
 app = express();
var path = require('path');
app.use(express.static(path.join(__dirname,'node_modules')));

app.get('/', function(req, res){
  res.sendFile('/my_app/views/index.html');
});

app.listen(8080);
console.log('Listening...... ')
