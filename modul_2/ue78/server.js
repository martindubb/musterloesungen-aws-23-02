const express = require('express');
const app = express();
const uuid = require('uuid');
const port = 3000;
const hostname = '127.0.0.1';

// aktivieren der urlencoded funktion
app.use(express.urlencoded({ extended: true }));

// npm install uuid
app.get('/uuid', (_, res) => {
    let u = uuid.v4();
    res.send(u);
});

app.get('/user-agent', (req, res) => {
    res.send(req.headers['user-agent']);
});

app.get('/headers', (req, res) => {
    let h = { headers: req.headers };
    res.send(h);
});

app.get('/url', (req, res) => {
    res.send(req.url);
});

app.get('/json', (_, res) => {
    let o = `{
        "person": {
            "name": "John",
            "age": 30
        }
    }
    `;
    res.setHeader("Content-Type", "application/json");
    res.send(o);
});

app.get('/xml', (_, res) => {
    let x = `<person>
        <name>John</name>
        <age>30</age>
    </person>
    `;
    res.setHeader("Content-Type", "application/xml")
    res.send(x);
});

app.post('/formdata', (req, res) => {
    console.log(`empfangene daten:\nname: ${req.body.name}\nalter: ${req.body.age}`);
    res.setHeader('Content-Type', 'text/plain');
    res.send(`empfangene daten:\nname: ${req.body.name}\nalter: ${req.body.age}`);
});


// server starten
app.listen(port, hostname, () => {
    console.log(`server listening on ${hostname}:${port}.`);
});