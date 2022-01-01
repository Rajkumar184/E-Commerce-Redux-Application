const express = require("express");
const router = express.Router();
const isUserLogin = require("../middleware/isUserLogin");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/capture/payment", isUserLogin, async (req, res) => {
	try {
		await stripe.paymentIntents.create({
			amount: req.body.amount * 100,
			currency: "inr",

			metadata: { integration_check: "accept_a_payment" },
		});

		res.status(201).json({ message: "Payment Success!" });
	} catch (error) {
		console.log(error.message);
	}
});

module.exports = router;
