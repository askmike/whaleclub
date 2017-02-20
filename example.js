const WhaleClub = require('./');

var API_KEY = 'xxx';
var wc = new WhaleClub(API_KEY)

// uncomment the call you want to test

// wc.markets().then(console.log);
// wc.price(['AAPL']).then(console.log);
// wc.priceTurbo(['AAPL']).then(console.log);
// wc.balance().then(console.log);
// wc.transactions().then(console.log);
// wc.newPosition({
//   direction: 'long',
//   market: 'AAPL',
//   leverage: 0,
//   size: 1 * 1e8, // 1 btc
//   entry_price: 100,
//   stop_loss: 80,
//   take_profit: 120
// }).then(console.log);
// wc.getPosition(100).then(console.log);
// wc.updatePosition(100, {stop_loss: 90, take_profit: 110}).then(console.log);
// wc.closePosition(100).then(console.log);
// wc.cancelPosition(100).then(console.log);
// wc.splitPosition(100, 20).then(console.log);
// wc.listPositions().then(console.log);
// wc.contracts().then(console.log);
// wc.newTurboPosition({
//   direction: 'long',
//   market: 'AAPL',
//   type: '1min',
//   size: 1 * 1e8 // 1 btc
// }).then(console.log);