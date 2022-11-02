const router = require("express").Router();
const { EmailSend } = require("../models/sendMail");
const { User } = require("../models/user");
const Token = require("../models/token");
const crypto = require("crypto");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");
const emailSend = require("../utils/emailSend");
// send password link
router.post("/", async (req, res) => {
	try {
	
		let user = await User.findOne({ email: req.body.email });

		let token = await Token.findOne({ userId: user._id });
		if (!token) {
			token = await new Token({
				userId: user._id,
				token: crypto.randomBytes(32).toString("hex"),
			}).save();
		}


	const emailData = await new EmailSend({ ...req.body}).save();
	const emailid=emailData.emailid
	const text1=emailData.text1
		
		await emailSend(emailid, "Mail Content", text1);

		res
			.status(200)
			.send({ message: "Mail Successfully sent" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = router;