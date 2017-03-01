var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static('_book'));

app.get('/', function(request, response){
  response.send('index');
});

app.listen(app.get('port'), function() {
  console.log('App ejecutandose en el puerto', app.get('port'));
});
