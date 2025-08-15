// EXTERNAL MODULES
const express = require("express");
const bodyParser=require('body-parser')

// INTERNAL MODULES
const userRout = require("./routers/userRout");
const hostRout=require('./routers/hostRouter')

// CORE MODULES
const path = require("path");

const app = express();

//this middleware is used for parsing the request body
app.use(bodyParser.urlencoded({ extended: false }));

//this is setup the ejs
app.set("view engine", "ejs");
app.set("views", "views");

//pulic the public folder
app.use(express.static(path.join(__dirname, "public")));

app.use(userRout);
app.use(hostRout)

const PORT = 3000;
app.listen(PORT, () => {
	console.log("the server is listening at the porst number 3000");
});
