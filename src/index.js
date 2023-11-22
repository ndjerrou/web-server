const express = require('express');
const path = require('path');

const app = express();

// middleware: we customize the server
app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, '..', 'public');

// what static files do we want to serve
app.use(express.static(publicPath));

// ex : servir les pages suivantes

// /about ==> page html
// /help ==> page html

app.get('', (req, res) => {
  res.send('Kikoo');
});

app.get('/html', (req, res) => {
  res.send('<h1>My first title</h1>');
});

app.get('/signup', (req, res) => {
  res.send(`
    <h2>Création d'un compte</h2>
    <form action="/thanks-you" method="POST">
        <div><label>Email :</label><input type='email' name='email' /></div>
        <div><label>Mdp :</label><input type='password' name='password' /></div>
        <button>Valider</button>
    </form>
    `);
});

app.post('/thanks-you', (req, res) => {
  //   req.on('data', data => {
  //     console.log(data.toString('utf8'));
  //   });

  res.send(req.body);
});

app.get('/paul', (req, res) => {
  res.send('paul page');
});

app.get('*', (req, res) => {
  res.send("J'intercepte toutes les requêtes !!!");
});

app.listen(8000, () => console.log('Listenning on port 8000'));

// www.monsite.com
// www.monsite.com/help
// www.monsite.com/about
// www.monsite.com/contact-me
