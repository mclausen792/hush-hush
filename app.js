var express = require('express')
var app = express()
var port = 3000
var bodyParser = require('body-parser')

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({
  entended: false
}))

app.listen(port, function(req, res) {
  console.log('Hello');
})
