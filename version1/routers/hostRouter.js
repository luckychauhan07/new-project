// EXTERNAL MODULES
const express = require("express");

// INTERNAL MODULES
const hostController = require("../controllers/hostController");

const hostRouter = express.Router();

hostRouter.get("/add-task", hostController.getAddTask);

hostRouter.post("/add-task", hostController.postAddTask);

hostRouter.get("/completed-tasks", hostController.getCompletedTasks);

hostRouter.get("/upcoming-tasks", hostController.getUpcomingTasks);

hostRouter.get("/pending-tasks", hostController.getPendingTasks);

hostRouter.get("/all-task", hostController.getAllTask);

hostRouter.post("/all-tasks", hostController.postAllTask);

hostRouter.get("/edit-todoItem/:id", hostController.getEditTodoItem);

module.exports = hostRouter;