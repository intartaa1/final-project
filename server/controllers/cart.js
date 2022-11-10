const express = require('express');
const { get, add, remove } = require('../models/cart');

const app = express.Router();

app.get('/', (req, res) => {
    res.send(get(req.params.userId));
});

app.post('/:userId/:porductId/:quantity', (req, res) => {
    res.send(add(req.params.porductId, req.params.userId, req.params.quantity));
});

app.delete('/:userId/:productId', (req, res) => {
    res.send(remove(req.params.productId, req.params.productId));
});

module.exports = app;