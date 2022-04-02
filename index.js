// create an express app and server index.html
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
});
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`listening on port ${port}`);
});