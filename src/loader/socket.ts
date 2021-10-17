import http from 'http';
import socketIO from 'socket.io';

export default (server: http.Server) => {
  console.log('Load Socket');
  const io = new socketIO.Server(server);
  let Usercounter = 0;
  io.on('connection', socket => {
    Usercounter += 1;
    io.emit('user', Usercounter);
    console.log('a user is connected');
    socket.on('disconnect', () => {
      Usercounter -= 1;
      io.emit('user', Usercounter);
      console.log('user disconnected');
    });

    socket.on('audioMessage', msg => {
      io.emit('audioMessage', msg);
    });
  });
};
