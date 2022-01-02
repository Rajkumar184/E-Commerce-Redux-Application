const express = require("express");
const router = express.Router();
const passport = require("passport");
require("./passport");
const isUserLogin = require("../middleware/isUserLogin");

router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/auth/callback",
	passport.authenticate("google", {
		failureRedirect: "https://shopify-mern-app.herokuapp.com/auth/google",
	}),
	(req, res) => {
		try {
			res.redirect("https://shopify-mern-app.herokuapp.com/");
			res.send(req.user);
		} catch (error) {
			console.log(error);
		}
	}
);

router.get("/auth/profile", isUserLogin, (req, res) => {
	res.send(req.user);
});

router.get("/auth/logout", (req, res) => {
	req.session = null;
	req.logout();
	res.redirect("https://shopify-mern-app.herokuapp.com/");
});

module.exports = router;

// app.get(
// 	"/auth/google",
// 	passport.authenticate("google", { scope: ["profile"] })
// );

// app.get(
// 	"/auth/google/callback",
// 	passport.authenticate("google", { failureRedirect: "/login" }),
// 	function (req, res) {
// 		// Successful authentication, redirect home.
// 		res.redirect("/");
// 	}
// );
