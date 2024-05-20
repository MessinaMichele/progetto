const express = require('express');
const path = require('path');
const app = express();

// Servi la directory statica 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servi la directory statica 'snake'
app.use('/snake', express.static(path.join(__dirname, 'snake')));

// Servi la directory statica 'tetris'
app.use('/tetris', express.static(path.join(__dirname, 'tetris')));

// Servi la directory statica 'pac-man'
app.use('/pac-man', express.static(path.join(__dirname, 'pac-man')));

app.use('/space-invaders', express.static(path.join(__dirname, 'space-invaders')));
// Quando si accede alla radice del server, invia il file test.html dalla cartella public
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

app.listen(7927, function () {
    console.log('Server running on port 7927');
});


