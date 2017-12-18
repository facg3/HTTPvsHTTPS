const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('serverKey.pem'),
  cert: fs.readFileSync('serverCert.pem'),

};

const server = tls.createServer(options, (res) => {
  res.write(`Hey, Server is connected - ${res.authorized}` ? 'Yeap!!' : 'Nop!');
  res.setEncoding('utf8');
  res.pipe(res);
});
const port = 4000;
server.listen(port, () => {
  console.log(`AmWorkingOn: ${port}`);
});
