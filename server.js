'use strict';

const express = require('express');

const { PORT }  = require('./constants/server');
const router = require('./routes/index');

const app = express();
app.use('/', router);

app.listen(PORT, console.log(`Listening at ${PORT}`));