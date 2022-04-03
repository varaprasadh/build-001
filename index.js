// create an express app and server index.html
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});