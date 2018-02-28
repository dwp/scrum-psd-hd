const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const fs = require('fs');

app.set('view engine', 'html');
app.use(express.static('public'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/listings', (req, res) => {
  res.render('listings');
});

app.get('/listings/:index', (req, res) => {
  const movieId = parseInt(req.params.index);
  if (isNaN(movieId) || movieId < 0 || movieId > 3) {
    res.status(400).send('Bad Request');
  } else {
    res.render(`details-${movieId}`);
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${server.address().port}!`);
});
