const express = require('express');
const bodyParser = require('body-parser');

const eventBusRouter = require('./routes/eventBusRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/', eventBusRouter);

module.exports = app;
