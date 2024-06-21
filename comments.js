// create web server with express
const express = require('express');
const app = express();
// create server with http
const http = require('http');
const server = http.createServer(app);
// create socket with socket.io
const io = require('socket.io')(server);