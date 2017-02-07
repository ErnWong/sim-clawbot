var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var SerialPort = require('serialport');
var fs = require('fs');

app.listen(80);
console.log('server listening at port 80');

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

io.on('connection', function (socket) {
  console.log('socket connected');
  SerialPort.list(function (err, ports) {
    if (err) {
      console.log(err);
    }
    if (!ports.length) {
      console.log("no serial port detected");
      return;
    }
    var port = new SerialPort(ports[0].comName, {
      parser: SerialPort.parsers.readline('\n')
    });
    port.on('open', function() {
      console.log('port opened');
    });
    port.on('disconnect', function() {
      console.log('port disconnected');
    });
    port.on('close', function() {
      console.log('port closed');
    });
    port.on('data', function (data) {
      var joyData = {
          ch1: data[0],
          ch2: data[1],
          ch3: data[2],
          ch4: data[3],
        btn5U: data[4],
        btn5D: data[6],
        btn6U: data[7],
        btn6D: data[8],
        btn7U: data[9],
        btn7D: data[10],
        btn7L: data[11],
        btn7R: data[12],
        btn8U: data[13],
        btn8D: data[14],
        btn8L: data[15],
        btn8R: data[16]
      };
      socket.emit('joydata', joyData);
    });
  });
});
