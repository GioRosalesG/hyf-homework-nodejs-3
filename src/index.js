const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => (console.log('Listening')));

// const users = [];

// app.get('/users', (req,res) => {
//   res.send(users);
// });

// app.post('/user', (req, res) => {
//   users.push(users.length);
//   //[0]
//   // users.length => 1
//   // users[users.length - 1] => 0
//   res.send({ id: users[users.length - 1] });
// });

// app.get('/users/0', (req, res) => {
//   res.send({ id: 0 });
// });