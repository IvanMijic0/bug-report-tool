import { ROLES } from '../utils/enums.js';

const roleGuard = (requiredRoles) => (req, res, next) => {
	const { role } = req.user;

	return requiredRoles.includes(role) ? next() : res.status(403).send('Not allowed');
};

export const bugAccessGuard = roleGuard([ROLES.DEVELOPER, ROLES.QA]);