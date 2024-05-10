const path = require('path');
const express = require('express');
const app = express();

// Servi la directory statica 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Quando si accede alla radice del server, invia il file test.html dalla cartella public
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

app.use('/tetris', express.static(path.join(__dirname, 'tetris')));

app.listen(7710, function () {
    console.log('Server running on port 7710');
});

