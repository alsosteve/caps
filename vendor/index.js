'use strict';
// this is the vendor

const client = require('socket.io-client');
// const socket = client('http://localhost:3000');
const socket = client.connect('http://localhost:3000/caps');


// Proof of life stuff:

// socket.emit('connection', payload => {
//   console.log('connection');
// });

// WF STEP 1:
setTimeout(() => {
  let delivery = {
    store: 'Satan Is An Ok Guy',
    orderID: '000000666',
    customer: 'Lucifer J. Wilks-Boothe',
    address: '51236 '
  }
  console.log('Dropped of at facility:', delivery);
  socket.emit('pickup', delivery); 
}, 5000);

// WF STEP 5:
socket.on('delivered', payload => {
  console.log(`Package ${payload.orderID} has been delivered.`);
});