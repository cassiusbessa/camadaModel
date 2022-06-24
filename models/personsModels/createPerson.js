const connection = require('../../helpers/connection')


const createPerson = async (person) => {
	const { firtName, lastName, email, password } = person;

	await connection.execute(
		`INSERT into exercicioCamadaModel.persons (firtName, lastName, email, password) 
		VALUES (?, ?, ?, ?)`, [firtName, lastName, email, password]);

	const result = {
		firtName, lastName, email, password
	};
	return result;
};

module.exports = {
	createPerson
}