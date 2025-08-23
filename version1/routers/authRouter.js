// EXTERNAL MODULES
const express = require("express");

// INTERNAL MODULES
const authController=require("../controllers/authController")

const authRouter = express.Router();

authRouter.get("/login", authController.getLogin);

authRouter.post("/login", authController.postLogin);

authRouter.get("/lucky",authController.getUnloggedPage)

module.exports = authRouter;
