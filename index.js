const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/public'))

app.get('/', (request, result) => {
	result.sendFile(__dirname + '/views/index.html')
})

io.on('connection', (socket) => {
    console.log("A user connected.")
    
    socket.on('event counter', (value) => {
        io.emit('event counter', value)
    })

    socket.on('disconnect', () => {
        console.log('A user has disconnected!');
    })
})

server.listen(3000, () => {
	console.log('listening on port 3000')
})

