const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
app.use(express.static('public'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('home');
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${server.address().port}!`);
});
