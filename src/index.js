const express = require('express');
const router = require('../routers/routes');
// const rescue = require('express-rescue');
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(helmet()); //para segurança
app.use('/', router);

app.listen(process.env.APP_PORT, () => {
  console.log('Ouvindo a porta 3001!');
});