import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

var comments = '';

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
    if (!data === 'plesecomments') {
      comments=+data;
    }
    ws.send(comments);
    
  });

});