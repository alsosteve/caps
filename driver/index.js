'use strict';
// this is the driver

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/caps');

socket.on('pickup', payload => {
  // WF STEP 2:
  console.log('You have an order to pick up: ', payload.orderID);
  
  // WF STEP 3:
  setTimeout(() => {
    console.log('I have picked the package: ', payload.orderID)
    socket.emit('in-transit', payload)
   }, 1000);
  
   // WF STEP 4:
   setTimeout(() => {
    console.log(`Package ${payload.orderID} delivered`);
    socket.emit('delivered', payload)
  }, 3000);
});