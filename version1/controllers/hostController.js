exports.getAddTask = (req, res, next) => {
	console.log(req.url, req.method);
    res.render('host/addTask',{
         pageTitle:"add new task page"
     })
};

exports.postAddTask = (req, res, next) => {
	console.log(req.url, req.method,req.body);
	res.render("allTasks", {
		pageTitle: "add new task page",
	});
};