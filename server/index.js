const morgan = require('morgan');
const express = require('express');
const path = require('path');
const createError = require('http-errors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('Error', {
    message: err.message,
    error: err,
    title: 'Flood Error',
  });
});

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'), (err) => {
    if (err) next(err);
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.info(`Server is listening on port ${PORT}\n`);
});