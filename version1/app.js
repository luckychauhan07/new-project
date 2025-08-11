const express = require("express");

const app = express();

//this is setup the ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
	console.log(req.url, req.method);
	res.render("lucky");
});
console.log("lucky chauhan testing the git new repo");

const PORT = 3000;
app.listen(PORT, () => {
	console.log("the server is listening at the porst number 3000");
});
