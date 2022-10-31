const express = require('express');
const products = require('../models/products');

const app = express.Router();

app
    .get('/', (req, res) => {
        res.status(200).send(products.getProducts());
    })