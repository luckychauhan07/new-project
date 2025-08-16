exports.getAddTask = (req, res, next) => {
	console.log(req.url, req.method);
    res.render('host/addTask',{
		pageTitle: "add new task page",
		currentPage:"addTask"
     })
};

const allTasks=require('../data/task')

exports.postAddTask = (req, res, next) => {
	console.log(req.url, req.method, req.body);
	allTasks.push(req.body)
	console.log(allTasks)
	res.render("allTasks", {
		pageTitle: "add new task page",
		allTasks: allTasks,
		currentPage: "addTask",
	});
};

exports.getCompletedTasks = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("lucky", {
		pageTitle: "task manager home page",
		currentPage: "home",
		filter:"completed"
	});
};

exports.getUpcomingTasks = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("lucky", {
		pageTitle: "task manager home page",
		currentPage: "home",
		filter:"upcoming"
	});
};

exports.getPendingTasks = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("lucky", {
		pageTitle: "task manager home page",
		currentPage: "home",
		filter:"pending"
	});
};

exports.getAllTask = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("lucky", {
		pageTitle: "task manager home page",
		currentPage: "home",
		filter: "all",
	});
};