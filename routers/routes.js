const express = require('express');
const controllers = require('../controllers');
const personsRoutes = require('./persons.routes')

const router = express.Router();

router.use('/', personsRoutes );


module.exports = router;



