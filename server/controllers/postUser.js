const User = require('../schemas/User');

const postUser = async (req, res) => {
	const { email, password } = req.body;

	console.log(req.body);

	if (email === undefined && password === undefined) {
		res.status(450);
		return await res.send({
			message: `Both email and password sent were undefined.`
		});
	} else if (email === undefined && password !== undefined) {
		res.status(451);
		return await res.send({
			message: 'The email sent was undefined.'
		});
	} else if (email !== undefined && password === undefined) {
		res.status(452);
		return await res.send({
			message: 'The password sent was undefined.'
		});
	} else {
		res.status(200);
		return res.send({
			message: `${email}: ${password} Recieved.`
		});
	}
};

module.exports = postUser;
