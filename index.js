const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;
const cors = require('cors')

const app = express();
let server = http.createServer(app);


const io = socketIO(server, {
    cors: { origin: '*' }
})

io.on('connection', (client) => {
    console.log(`CLiente ${client.id} conectado`)

    client.on('chat_message', (msg) => {
        client.broadcast.emit('chat_message', msg)
    })
})

app.get('/', (req, res) => {
    res.end('Hola mi cabezona peshosha, la Amo <3')
})


server.listen(port, () => {
    console.log(`Server running in port ${port}`)
})
