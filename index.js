const express = require('express');
const bodyParser = require('body-parser');
const verifyWebhook = require('./verify-webhook');
const dotenv = require('dotenv').config({ path: 'variables.env' });


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => console.log('Express server is listening on port 5000'));


app.get('/', verifyWebhook);