'use strict';
// this is the caps-server

const socketio = require('socket.io');
const client = require('socket.io-client');

const PORT = process.env.PORT || 3000;

const server = socketio(PORT); // this line starts our server.
const caps = server.of('/caps');

// Proof of life stuff

// server.on('connection', (socket) => {

//   console.log('someone connected!!!');

// });


caps.on('connection', (socket) =>  {
  console.log('socket connected');

  // do your socket want to join a specific
  socket.on('join', room => {
    socket.join(room);
  });

  // WF STEP 1:
  socket.on('pickup', payload => {
    
    // WF STEP 2:
    console.log('transfering package to driver', payload);
    socket.broadcast.emit('pickup', payload);
  });

  // WF STEP 3:
  socket.on('in-transit', payload => {
    console.log('Package is in truck. Order #: ', payload.orderID);
  });

  // WF STEP 4:
  socket.on('delivered', payload => {
    console.log(`Package ${payload.orderID} has been delivered.`);

    // WF STEP 5:
    socket.broadcast.emit('delivered', payload);
  });

});
