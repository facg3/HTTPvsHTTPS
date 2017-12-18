# HTTPvsHTTPS

### What is http:
##### http stands for (HyperText Transfer Protocol). is an application protocol for distributed, collaborative, and hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web. Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text.


### What is https:
##### https stands for (HyperText Transfer Protocol Secure). A secure form of Hypertext Transfer Protocol (HTTP) that is used to exchange information between webpages or access information found on a webpage. Hypertext Transfer Protocol Secure, more commonly referred to as HTTPS, encrypts data before it is sent.

### What's the difference:
##### Using HTTPS, the computers agree on a "code" between them, and then they scramble the messages using that "code" so that no one in between can read them. This keeps your information safe from hackers. With HTTPS if anyone in between the sender and the recipient could open the message, they still could not understand it. Only the sender and the recipient, who know the "code," can decipher the message.

### How does https do that:
##### HTTPS takes the well-known and understood HTTP protocol, and simply layers a SSL/TLS (hereafter referred to simply as “SSL”) encryption layer on top of it. Servers and clients still speak exactly the same HTTP to each other, but over a secure SSL connection that encrypts and decrypts their requests and responses.

### Now, what is SSL/TLS:
##### Transport Layer Security (TLS).- and its predecessor, Secure Sockets Layer (SSL), are cryptographic protocols that provide communications security over a computer network.

### How does it work exactly:
##### The Schannel authentication protocol suite is based on public key cryptography. The Schannel suite includes Transport Layer Security (TLS), Secure Sockets Layer (SSL) version 3.0, SSL version 2.0, and Private Communications Transport (PCT). All Schannel protocols are based on a client/server model.

## HTTPS:
Hyper Text Transfer Protocol Secure, we also can say its, an HTTP on top of SSL/TLS.

## SSL/TLS:
### Stands for:
Secure Sockets Layer/Transport Layer Security.
### Hashing in use:
MD5, SHA1, SHA256.


## What is it used for?
Provide integrity, and privacy of a connection between two devices over the network.

## Helpful Plugin:
A useful browser plugin is “HTTPS Everywhere”, which encrypts our communications with most websites.

## How Do We Create An HTTPS Request?
```javascript:
var https = require('https');

https.get(URL, function(res) {
   console.log('statusCode: ', res.statusCode);

   res.on('data', function(d) {
      process.stdout.write(d); // Log's out the output into the Terminal.
   });
});

```

## How Do I run my server upon HTTPS:
##### 1. We need to generate a 2048-bit RSA private key:
```
openssl genrsa -out privateKey.pem 2048
```

##### 2. We need a CSR(Certificate Signing Request), for that private key:
```
openssl req -new -sha256 -key privateKey.pem -out privateCsr.pem
```

##### 3. Build our server using tls:
```javascript:
const tls = require('tls');
const fs = require('fs');
```

##### 4. Define options option which is required to create the server:
```javascript:
const options = {
  key: fs.readFileSync('serverKey.pem'),
  cert: fs.readFileSync('serverCert.pem'),

};
```

##### 5. Launching:
```javascript:
const server = tls.createServer(options, (res) => {
  res.write(`Hey, Server is connected - ${res.authorized}` ? 'Yeap!!' : 'Nop!');
  res.setEncoding('utf8');
  res.pipe(res);
});
const port = 4000;
server.listen(port, () => {
  console.log(`AmWorkingOn: ${port}`);
});
```

##### 6. If nothing wen't wrong we will be able to pass the SSL test for the server, which can be executed from terminal using OpenSSL command:
```
openssl s_client -connect localhost:4000
```
