const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use(errorMiddleware);

module.exports = app;
