// create web server with express
const express = require('express');
const app = express();

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// another route
app.get('/comment', (req, res) => {
  res.send('Hello Comment');
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 