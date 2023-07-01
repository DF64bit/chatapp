import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

var comments = '';
var wt = [];
function sendtoall(ms) {
  for (let index = 0; index < wt.length; index++) {
    wt[index].send(ms);
    
  }
}

wss.on('connection', function connection(ws) {
  wt.push(ws);
  ws.send('server connected.')
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log(data);
    comments = comments + (data) + '<br>';
    console.log(comments)
    sendtoall(comments);
    
  });

});