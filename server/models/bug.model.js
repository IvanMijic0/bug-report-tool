import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const { Schema } = mongoose;

const bug
	= new Schema({
	_id: {
		type: String,
		default: uuidv4
	},
	title: String,
	steps: String,
	assignedTo: String,
	reportedBy: String,
	completed: {
		type: Boolean,
		default: false
	},
	severity: String,
	timestamp: {
		type: Date,
		default: Date()
	}
});

const Bug = mongoose.model('bug', bug);

export default Bug;