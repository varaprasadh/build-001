// create an express app and server index.html
const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
});

app.get('/key', (req, res) => {
    return res.json({
        key: process.env.API_KEY
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});