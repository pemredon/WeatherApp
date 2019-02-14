var mongoose = require('../models/bdd');

// Creation of a new schema for our users
var userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Creation of a new model for our users
var userModel = mongoose.model('users', userSchema);

module.exports = userModel;
