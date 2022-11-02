const mongoose = require("mongoose");
const Joi = require("joi");

const emailSendSchema = new mongoose.Schema({
	emailid: { type: String, required: false },
	text1: { type: String, required: false },
});

const EmailSend = mongoose.model("emailSend", emailSendSchema);

const validate = (data) => {
	const schema = Joi.object({
		emailid: Joi.string().email().required().label("EmailID"),
	});
	return schema.validate(data);
};

module.exports = { EmailSend, validate };