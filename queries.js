const db = require('./connections')


function createUser(user) {
  const code = generateRandomString()

  user.code = code
  return db('users').insert(user).returning(['id', 'code'])
  alert('id', 'code')
}

function getUsers() {
  return db.select().from('users')
}

function getUserById(id) {
  return db.select().from('users').where('id', id)
}

function createSecret(secret) {
  return db('secrets').insert(secret)
}

function getSecret() {
  return db.select().from('secrets')
}


function generateRandomString() {
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    code += possible.charAt(Math.floor(Math.random() * possible.length));

  return code;
}


module.exports = {
  getUserById: getUserById,
  createSecret: createSecret,
  getSecret: getSecret,
  createUser: createUser,
  getUsers: getUsers
}
