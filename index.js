import express from 'express';
import canonize from './canonize';

const app = express();

app.get('/', (req, res) => {
  const url = req.query.username;
  var username
  if(!(username = canonize(url))){
    res.send('Invalid username');
  }else{
    res.send('@' + username);
  }
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
