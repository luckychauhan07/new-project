// EXTERNAL MODULES
const express = require("express");

// INTERNAL MODULES
const hostController = require("../controllers/hostController");

const hostRouter = express.Router();

hostRouter.get("/add-task", hostController.getAddTask);

hostRouter.post("/add-task", hostController.postAddTask);


module.exports = hostRouter;