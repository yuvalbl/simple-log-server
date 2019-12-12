const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let log = [];

app.get('/reset', (req, res) => {
    log = [];
    res.redirect('/');
});

app.get('/', (req, res) => res.json(log));

app.post('/add', (req, res) => {
    console.log('got POST with body:', req.body);
    log.push(req.body);
    res.json(log);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Simple log server listening on port ${PORT}!`));




