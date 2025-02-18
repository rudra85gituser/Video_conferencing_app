//creating normal http backend server using express
//here we are using / requiring http library
/*
const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
*/


//or
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server);
//this io comes form socket.io library which we have installed 
//using these 4 line s we are creating the connection between the brouser and the server 
/*
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
</script>
*/


/*app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});*/

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });


/*
io.on('connection', (socket) => {
    console.log('a user connected');
  });
*/
io.on('connection', (socket) => 
    {
    socket.on('chat message', (msg) => 
        {
            console.log('message: ' + msg);
            io.emit('chat message', msg);
        });
    });

//Each socket also fires a special disconnect event:
/*
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
*/

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

