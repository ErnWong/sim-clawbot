var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({ input: process.stdin });

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
  function pushdata(data) {
    process.stdout.write('data: '+ data + '\r');
    data = data.split(' ').map((x) => parseInt(x));
    var joyData = {
        ch1: data[0],
        ch2: data[1],
        ch3: data[2],
        ch4: data[3],
      btn5U: data[4],
      btn5D: data[5],
      btn6U: data[6],
      btn6D: data[7],
      btn7U: data[8],
      btn7D: data[9],
      btn7L: data[10],
      btn7R: data[11],
      btn8U: data[12],
      btn8D: data[13],
      btn8L: data[14],
      btn8R: data[15]
    };
    socket.emit('joydata', joyData);
  }
  rl.on('line', pushdata);
});
