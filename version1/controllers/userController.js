exports.getHome = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("lucky", {
		pageTitle:"task manager home page"
	});
};

exports.getTasks = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("allTasks", {
		pageTitle: "All Tasks page",
	});
};

exports.getTeams = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("teams", {
		pageTitle: "Teams page",
	});
};
