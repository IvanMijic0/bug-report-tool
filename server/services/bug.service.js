import Bug from "../models/bug.model.js";
import { ROLES } from "../utils/enums.js";

export const findAllBugs = async (req, res) => {
	const { role, _id: userId } = req.user;

	try {
		if (role === ROLES.QA) {
			return res.json(await Bug.find({ reportedBy: userId }))
		} else if (role === ROLES.DEVELOPER) {
			return res.json(await Bug.find({ assignedTo: userId }))
		}
	} catch (e) {
		return res.status(500).send('There was an error with getting the Bug report.')
	}

}

export const saveBug = async (req, res) => {
	const { title, ...data } = req.body;

	try {
		const existingBug = await Bug.findOne({ title });

		if (existingBug) {
			return res.status(409).send('Bug already reported.');
		}
		const savedBug = await Bug.create({ title, ...data })
		if (savedBug) {
			return res.status(200).send('Successfully created bug.')
		}
		return res.status(404).send('Failed creating Bug.')
	} catch (e) {
		return res.status(500).send('Could not add Bug to database. ' + e)
	}
}

export const saveBugs = async (req, res) => {
	const bugs = req.body;

	try {
		const promises = bugs.map(async (bug) => {
			const { title, ...data } = bug;
			const existingBug = await Bug.findOne({ title });

			if (existingBug) {
				return `Bug '${ title }' already reported.`;
			}
			const savedBug = await Bug.create({ title, ...data });

			if (savedBug) {
				return savedBug;
			} else {
				return `Failed creating Bug '${ title }'.`;
			}
		});
		const results = await Promise.all(promises);

		return res.status(200).json(results);
	} catch (e) {
		return res.status(500).send('Could not add Bug(s) to database. ' + e);
	}
};

export const updateCompletion = async (req, res) => {
	const { bugId } = req.params;
	const { completed } = req.body;

	try {
		const updatedCompletion = await Bug.findByIdAndUpdate(bugId, { completed });

		if (!updatedCompletion) {
			return res.status(404).json({ message: 'Bug report does not exist in database.' });
		}
		return res.json({ completed });
	} catch (error) {
		return res.status(500).json({ message: 'Could not update Bug report completion.' });
	}
};

export const delBug = async (req, res) => {
	const { bugId } = req.params;

	try {
		const deletedBug = await Bug.findByIdAndDelete(bugId);

		if (!deletedBug) {
			return res.status(404).json({ message: 'Bug report not found.' });
		}
		return res.json({ message: 'Bug report deleted successfully.' });
	} catch (error) {
		return res.status(500).json({ message: 'Could not delete Bug report.' });
	}
}