const express = require("express");
const app = express();

const users = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req,res) => {
  res.send(users);
});
 
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
app.listen(3000, () => (console.log('Listening')));