var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
const user = require('./routes/users')
const secret = require('./routes/secrets')

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/api/users', user)
app.use('/api/secrets', secret)


app.get('/', (req, res) => {
  res.render('index')
})
app.get('/login.hbs', (req, res) => {
  res.render('login')
})
app.get('/addSecrets.hbs', (req, res) => {
  res.render('addSecret')
})
app.get('/secrets.hbs', (req, res) => {
  res.render('secrets')
})
app.get('/index.hbs', (req, res) => {
  res.render('index')
})


app.listen(port, function(req, res) {
  console.log('Hello');
})
module.exports = app
