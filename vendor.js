'use strict';

const event = require('./eventPool');

setInterval(() => {
  let delivery = {
    store: 'Satan Is An Ok Guy',
    orderID: '000000666',
    customer: 'Lucifer J. Wilks-Boothe',
    address: '51236 '
  }
  console.log('this is a thing', delivery);
  event.emit('pickup', delivery); 
}, 5000);

event.on('delivered', handleDeliv);

function handleDeliv(payload) {
  console.log(`VENDOR: Thank you for my sweet delivery ${payload.orderID}`);
}

