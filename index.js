const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'html');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
