const express = require('express')
const controllers = require('../controllers')

const personsRoutes = express.Router();

personsRoutes.post('/person', controllers.createPerson)




module.exports = 	personsRoutes;