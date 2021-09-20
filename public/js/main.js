const socket = io("/") // tell socket io where our socket server is listening i.e. localhost:3000


socket.on('connect', () => {
    console.log('successfully connnected to socket.io server i.e. wss - Web Socket server');
    console.log(socket.id);
});
