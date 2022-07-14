const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const router = require('./router');

const app = express();

app.use(express.json());

app.use('/login', router);
app.use(errorMiddleware);

module.exports = app;
