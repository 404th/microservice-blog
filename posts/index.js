const express = require("express");
const { randomBytes } = require("crypto");
// const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser());
app.use(express.json());

// fake db
const posts = {};

app.get("/posts", (req, res) => {
	res.status(200).send(posts);
});

app.post("/posts", (req, res) => {
	const id = randomBytes(4).toString("hex");

	const { title } = req.body;

	posts[id] = {
		id,
		title,
	};

	res.status(201).send(posts[id]);
});

app.listen(4000, () => {
	console.log("Posts server is running on PORT:4000");
});
