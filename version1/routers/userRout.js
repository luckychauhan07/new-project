// EXTERNAL MODULES
const express = require("express");

// INTERNAL MODULES
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", userController.getHome);

userRouter.get("/all-tasks", userController.getTasks);

userRouter.get("/teams", userController.getTeams);

userRouter.post("/mark-task-complete", userController.postCompleteTask);




module.exports = userRouter;
