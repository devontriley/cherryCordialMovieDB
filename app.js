const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

app.use(express.static( path.join(__dirname, 'build') ));

app.get('/create-account', (req, res) =>
{
    res.send('WOO');
});

let server = app.listen(port, () => {
    console.log( path.join(__dirname, 'build') );
});