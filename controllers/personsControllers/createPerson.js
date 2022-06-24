const services = require('../../services');


const createPerson = async (req, res) => {
	const { firtName, lastName, email, password } = req.body;
	try{
		const newPerson = await services.createPerson(req.body);
		res.status(200).json(newPerson);
	} catch(erro) {
		return res.status(400).send('deu ruim')
	}
};

module.exports = createPerson;