const mongoose = require('../database/index');
const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    }
})

const Messages = mongoose.model('Messages', messageSchema);
module.exports = Messages;