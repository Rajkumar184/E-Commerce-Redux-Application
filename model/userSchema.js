const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	photo: {
		type: String,
	},
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	googleId: {
		type: String,
	},
});

const googleUser = mongoose.model("GoogleUser", userSchema);
module.exports = googleUser;
