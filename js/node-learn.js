const chalk = require('chalk');
const path = require('path');
const os = require('os');
const events = require('events');
const { EventEmitter } = require('events');
const http = require('http');
const fs = require('fs');

//console.log(path.parse(__filename));
//console.log(os.platform());
//console.log(os.cpus());
//console.log(os.networkInterfaces());
/*
const emiter = new EventEmitter();
emiter.on('any', data => {
  console.log('On: ', data)
});

emiter.emit('any', {a: 1});*/

const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, '../index.html'), (err, data) => {
      if(err) throw err;

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.end(data);
    });
  };

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html': req.url);
  fs.readFile(filePath, (err, data) => {
    if(err) {
        fs.readFile(path.join(__dirname, '../err.html'), (err, errData) => {
          if (err) throw err;

          res.writeHead(200, {
            'Content-Type': 'text/html'
          });

          res.end(errData);
      });
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('server is listening');
});