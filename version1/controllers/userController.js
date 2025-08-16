exports.getHome = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("lucky", {
		pageTitle: "task manager home page",
		currentPage: "home",
		filter:"all"
	});
};

const allTasks = require("../data/task");

exports.getTasks = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("allTasks", {
		pageTitle: "All Tasks page",
		allTasks,
		currentPage: "allTasks",
	});
};

exports.getTeams = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("teams", {
		pageTitle: "Teams page",
		currentPage: "teams",
	});
};
