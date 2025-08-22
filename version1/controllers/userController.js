const TodoItem = require("../model/todoItems");
exports.getHome = (req, res, next) => {
	TodoItem.fetchAll().then((allTasks) => {
		console.log(allTasks);
		res.render("lucky", {
			pageTitle: "task manager home page",
			currentPage: "home",
			filter: "all",
			allTasks,
		});
	});
	console.log("home page");
};

exports.getTasks = (req, res, next) => {
	console.log(req.url, req.method);
	TodoItem.fetchAll().then((allTasks) => {
		res.render("allTasks", {
			pageTitle: "All Tasks page",
			allTasks,
			currentPage: "allTasks",
		});
	});
};

exports.getTeams = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("teams", {
		pageTitle: "Teams page",
		currentPage: "teams",
	});
};
