const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server); // server created using express app

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");

});

server.listen(PORT, () => { 
    console.log(`listening on ${PORT}`);
});


// make public folder accessible outside our server
// register a new middleware
app.use(express.static("public"))

app.get('/hello', (req,res) => {
    res.send("Hello Darkness!!! My old friend!!!")
});

io.on('connection', (socket) => {
    console.log('User connectred to socket.IO server');
    console.log(socket.id);
});