var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var customers = [
  {id:1, first: 'Scott', last: 'Gourley'},
  {id:2, first: 'Doug', last: 'Maxfield'},
  {id:3, first: 'Tom', last: 'Pridham'}
]

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.get('/api/customers', function(req, res){
  res.status(200).json(customers)
})

app.post('/api/customers', function(req, res){
  customers.push(req.body)
  res.status(200).json('success')
})

app.put('/api/customers/:id', function(req, res){
  for(var i = 0; i < customers.length; i++) {
    if(customers[i].id == req.params.id){
      customers[i].first =req.body.first
      customers[i].last = req.body.last
    }
  }
res.status(200).json('updated!')

})

app.delete('/api/customers/:id', function(req, res){
customers.forEach(function(val, i, arr){
  if(val.id == req.params.id){
    arr.splice(i, 1)
  }
})
res.status(200).json('deleted')
})


var port = 3000
app.listen(port, function(){
  console.log('Listening on ' + port)
})
