const express = require("express");
const app = express();

const users = [];
// [{ id: 0 }];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req,res) => {
  res.send(users.map((item)=> (
    {id: item}
  )));
});

app.post('/user', (req, res) => {
  users.push(users.length);
  //[0]
  // users.length => 1
  // users[users.length - 1] => 0

  res.status(200).json({ id: users[users.length - 1] });
});

app.get('/user/:userId', (req, res) => {
    const user = {id: users[Number(req.params.userId)]}

    res.send(user);
  });

  
app.listen(3000, () => (console.log('Listening')));
