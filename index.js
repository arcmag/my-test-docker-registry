const express = require('express');

const app = express();

const PORT = 3005;

app.get((req, res) => {
    return res.send('test');
});

app.listen(() => {
    console.log(`Server listened port ${PORT}`);
}, PORT);
