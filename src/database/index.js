const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

moongose.connect('mongodb://localhost/chat');

mongoose.Promise = global.Promise;

module.exports = mongoose