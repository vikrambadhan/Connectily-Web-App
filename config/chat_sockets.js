module.exports.chatSockets = function(socketServer){
        let io = require('socket.io')(socketServer);
      console.log("avout to connect");
      
        io.sockets.on('connection', function(socket){
           console.log('new connection received', socket.id);

     })
}
