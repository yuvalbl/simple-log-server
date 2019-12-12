const express = require('express');
const app = express();

let log = [];

app.use(express.json());

app.get('/reset', (req, res) => {
    log = [];
    res.json(log);
});

app.get('/log', (req, res) => res.json(log));

app.post('/add', (req, res) => {
    console.log('got POST with body:', req.body);
    log.push(req.body);
    res.json(log);
});

app.listen(4000, () => console.log('Example app listening on port 4000!'))




