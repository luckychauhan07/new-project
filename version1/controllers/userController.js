const TodoItem = require("../model/todoItems");
exports.getHome = (req, res, next) => {
	TodoItem.fetchAll().then((allTasks) => {
		res.render("lucky", {
			pageTitle: "task manager home page",
			currentPage: "home",
			filter: "all",
			allTasks,
		});
	});
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

exports.postCompleteTask = (req, res, next) => {
	console.log(req.url, req.method, req.body);
	const taskId = req.body.taskId;
	TodoItem.changeStatusById("completed", taskId).then(() => {
		console.log("the status of task is changed successfully");
		TodoItem.fetchAll().then((allTasks) => {
			res.render("allTasks", {
				pageTitle: "All Tasks page",
				allTasks,
				currentPage: "allTasks",
			});
		});
	})
	
};