require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = {
	verifyToken(req, res, next) {
		// let tokenHeader = req.headers['x-access-token'];
		let tokenHeader = req.headers['authorization'];
		if(!tokenHeader){
			return res.status(403).send({
				auth: false,
				message: "Error",
				errors: "No token provided"
			});
		}

		if (tokenHeader.split(' ')[0] !== 'Bearer') {
			return res.status(500).send({
				auth: false,
				message: "Error",
				errors: "Incorrect token format"
			});
		}

		let token = tokenHeader.split(' ')[1];

		if (!token) {
			return res.status(403).send({
				auth: false,
				message: "Error",
				errors: "No token provided"
			});
		}

		jwt.verify(token, process.env.API_SECRET, (err, decoded) => {
			if (err) {
				return res.status(401).send({
					auth: false,
					message: "Error",
					errors: err
				});
			}
			req.jwtClaims = {
				id_user : decoded.id_user,
				id_role : decoded.id_role,
			}
			next();
		});
	},
}