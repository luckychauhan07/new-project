// ITERNAL MODULES
const TodoItem = require("../model/todoItems");

exports.getAddTask = (req, res, next) => {
	console.log(req.url, req.method);
	res.render("host/addTask", {
		pageTitle: "add new task page",
		currentPage: "addTask",
	});
};

exports.postAddTask = (req, res, next) => {
	const { taskTitle, taskDescription, taskDate, taskAssignedId, status } =
		req.body;
	const todoItem = new TodoItem(
		taskTitle,
		taskDescription,
		taskDate,
		taskAssignedId,
		status
	);
	console.log(req.url, req.method, todoItem);
	todoItem.save().then(() => {
		TodoItem.fetchAll().then((allTasks) => {
			res.render("allTasks", {
				pageTitle: "add new task page",
				allTasks: allTasks,
				currentPage: "addTask",
			});
		});
	});
};
exports.getCompletedTasks = (req, res, next) => {
	TodoItem.findByStatus("completed").then((items) => {
		res.render("lucky", {
			pageTitle: "task manager home page",
			currentPage: "home",
			filter: "completed",
			allTasks: items,
		});
	});
};

exports.getUpcomingTasks = (req, res, next) => {
	TodoItem.findByStatus("upcoming").then((items) => {
		res.render("lucky", {
			pageTitle: "task manager home page",
			currentPage: "home",
			filter: "upcoming",
			allTasks: items,
		});
	});
};

exports.getPendingTasks = (req, res, next) => {
	TodoItem.findByStatus("pending").then((items) => {
		res.render("lucky", {
			pageTitle: "task manager home page",
			currentPage: "home",
			filter: "pending",
			allTasks: items,
		});
	});
};

exports.getAllTask = (req, res, next) => {
	TodoItem.fetchAll().then((allTasks) => {
		res.render("lucky", {
			pageTitle: "task manager home page",
			currentPage: "home",
			filter: "all",
			allTasks: allTasks,
		});
	});
};

exports.postAllTask = (req, res, next) => {
	const { todoItemId } = req.body;
	TodoItem.deleteTodoItemById(todoItemId).then(() => {
		TodoItem.fetchAll().then((allTasks) => {
			res.render("allTasks", {
				pageTitle: "All Tasks page",
				allTasks,
				currentPage: "allTasks",
			});
		});
	});
};

exports.getEditTodoItem = (req, res, next) => {
	const editing = req.query.editing;
	const todoId = req.params.id;
	console.log(editing,todoId)
}