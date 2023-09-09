var express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./database_connection');
let router = require("./routers/router");

const { Socket } = require('socket.io');
const { parse } = require('path');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use('/api/cat', router);


io.on('connect',(socket)=>{
    console.log('Yeah I am connected...!');
    socket.on('disconnect', () => {
        console.log('Opes I am disconnected...!');
    });

    setInterval(()=>{
        socket.emit('message', 'hello world');
    }, 1000)

});

http.listen(port, ()=>{
    console.log('express server started');
});