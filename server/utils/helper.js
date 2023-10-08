import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const hashPassword = async (pwd) => {
	return await bcrypt.hash(pwd, +process.env.SALT);
};

export const cmpPwd = async (pwd, hash) => {
	return await bcrypt.compare(pwd, hash);
};

export const sign = async (data) => {
	return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
}

export const verify = async (tkn) => {
	return jwt.verify(tkn, process.env.JWT_SECRET);
};

export const retrieveToken = async (req, res) => {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader) {
		return res.status(401).json({ message: 'Unauthorized: Missing token.' });
	}

	return authorizationHeader.replace('Bearer ', '');
};