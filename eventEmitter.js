'use strict';

const eventPool = require('./eventPool.js');
const vendor = require('./vendor.js');
const driver = require('./driver.js');

// eventPool.on('pick-up', vendorHandler);
// eventPool.on('in-transit', vendorHandler);
// eventPool.on('drop-off', vendorHandler);

eventPool.on('pickup', (payload) => logEvent ('pickup', payload));
eventPool.on('in-transit', (payload) => logEvent('in-transit', payload));
eventPool.on('delivered', (payload) => logEvent('delivered', payload));

function logEvent(event, payload) {
  let timestamp = new Date();
  console.log('Event', {event, timestamp, payload});
}

// setStuff((eventPool, payload) => {
//   let timestamp = new Date();
//   console.log('Event', {eventPool, timestamp, payload});
// });
