const express = require('express');
const file = require('./getData');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get('/products', (req, res) => {
    file.getDataProducts()
        .then((result) => res.json(result))
        .catch((err) => err);
});

app.get('/buyers', (req, res) => {
    file.getDataBuyers()
        .then((result) => res.json(result))
        .catch((err) => err);
});

app.get('/transactions', (req, res) => {
    file.getDataTransactions()
        .then((result) => res.json(result))
        .catch((err) => err);
});

app.listen(port, () => {
    console.log("Server is at: http://localhost:3001");
})