exports.getUnloggedPage = (req, res, next) => {
	res.render("welcome");
};

exports.getLogin = (req, res, next) => {
	res.render("auth/login", {
		pageTitle: "Login page",
	});
};

exports.postLogin = (req, res, next) => {
    res.cookie("isLoggedIn", true);
	res.redirect("/");
};
