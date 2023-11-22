const express = require('express');

const app = express();

// middleware: we customise the server
app.use(express.urlencoded({ extended: true }));

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
