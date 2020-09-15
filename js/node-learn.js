const chalk = require('chalk');
const path = require('path');
const os = require('os');
const events = require('events');
const { EventEmitter } = require('events');

//console.log(path.parse(__filename));
//console.log(os.platform());
//console.log(os.cpus());
//console.log(os.networkInterfaces());

const emiter = new EventEmitter();
emiter.on('any', data => {
  console.log('On: ', data)
});

emiter.emit('any', {a: 1});