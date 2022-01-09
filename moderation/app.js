const express = require('express');
const bodyParser = require('body-parser');

const moderationRouter = require('./routes/moderationRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/', moderationRouter);

module.exports = app;
