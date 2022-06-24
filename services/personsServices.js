const models = require('../models')


const createPerson = async (person) => await models.createPerson(person);

module.exports = {
	createPerson
};