var express = require('express'),
 app = express();
var path = require('path');
app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')));


app.get('/', function(req, res){
  res.renderfile('/my_app/views/index.html');
});

app.listen(3000);
console.log('Listening...... ')
