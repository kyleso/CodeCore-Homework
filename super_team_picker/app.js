const express = require('express');
const app = express();
const logger = require('morgan');


app.set('view engine', 'ejs');

app.use(logger('dev'));


app.get('/', (req, res) => {
  res.send('home')
  res.render('home')
})


const PORT = 4001;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`The server is listening at http://${HOST}:${PORT}`)
})