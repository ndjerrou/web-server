const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Kikoo');
});

app.get('/html', (req, res) => {
  res.send('<h1>My first title</h1>');
});

app.get('/signup', (req, res) => {
  res.send(`
    <h2>Création d'un compte</h2>
    <form>
        <div><label>Email :</label><input type='email' name='email' /></div>
        <div><label>Mdp :</label><input type='password' name='password' /></div>
        <button>Valider</button>
    </form>
    `);
});

// Lors de la soumission du formulaire, on souhaite que le serveur nous dirige vers une autre page

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
