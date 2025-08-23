// EXTERNAL MODULES
const express = require("express");
const bodyParser = require("body-parser");

// INTERNAL MODULES
const userRout = require("./routers/userRout");
const hostRout = require("./routers/hostRouter");
const authRout = require("./routers/authRouter");
const { mongoConnect } = require("./util/datbaseUtil");

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

app.use((req, res, next) => {
	req.isLoggedIn = false;
	const cookie = req.get("cookie");

	if (cookie) {
		const cookies = cookie.split(";").map((c) => c.trim());
		const loginCookie = cookies.find((c) => c.startsWith("isLoggedIn="));
		if (loginCookie && loginCookie.split("=")[1] === "true") {
			req.isLoggedIn = true;
		}
	}
	next();
});

app.use((req, res, next) => {
	if (
		req.isLoggedIn ||
		req.path === "/welcome" ||
		req.path.startsWith("/auth")
	) {
		return next();
	}
	return res.redirect("/welcome");
});

app.get("/welcome", (req, res) => {
	res.render("welcome");
});

app.use("/auth", authRout);
app.use(userRout);
app.use(hostRout);

const PORT = 3000;
mongoConnect(() => {
	app.listen(PORT, () => {
		console.log("the server is listening at the port number 3000");
	});
});
