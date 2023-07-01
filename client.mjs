const ws = new WebSocket('wss://df64bit-automatic-space-tribble-6x964q96qr7hx676-8080.preview.app.github.dev/');

ws.onerror = ()=>{ console.error() };

ws.onopen = function open() {
  ws.onmessage = function message(data) {
  console.log(data);
  var ms = ('%s', data)
  console.log(data.data);
  document.getElementById('commentsarea').innerHTML = data.data;
};

document.getElementById('send').addEventListener('click',
(e)=>{
  ws.send(document.getElementById('inputtext').value);
});

};

