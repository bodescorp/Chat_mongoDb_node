const express = require('express');
const path = require('path');
const { Socket } = require('socket.io');

const Messages = require('./src/models/mesages')

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', (request, response) => {
    response.render('index.html');
});



io.on('connection', socket => {
    console.log(`Socket Conectado: ${socket.id}`);
    
    Messages.find().then(result => {
        socket.emit('previousMessages', result);
    })


    socket.on('sendMessage', data => {
        const msg = Messages.create(data)
        socket.broadcast.emit('receivedMessage', data);
    });
})

server.listen(3000);