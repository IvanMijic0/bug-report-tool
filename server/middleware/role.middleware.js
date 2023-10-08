import { ROLES } from '../utils/enums.js';

const roleGuard = (requiredRole) => (req, res, next) => {
	const { user } = req;

	if (user.role === requiredRole) {
		return next();
	}

	res.status(403).send('Not allowed');
};

export const devGuard = roleGuard(ROLES.DEVELOPER);
export const qaGuard = roleGuard(ROLES.QA);