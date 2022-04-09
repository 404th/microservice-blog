const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(express.json());
app.use(cors());
// fake db
const commentsByPostID = {};

app.get("/posts/:id/comments", (req, res) => {
	res.status(200).send(commentsByPostID[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
	const commentID = randomBytes(4).toString("hex");

	const particular_comments = commentsByPostID[req.params.id] || [];

	particular_comments.push({ commentID, content: req.body.content });

	commentsByPostID[req.params.id] = particular_comments;

	await axios.post("http://localhost:4005/events", {
		type: "CommentCreated",
		data: {
			id: commentID,
			content: req.body.content,
			postID: req.params.id,
		},
	});

	res.status(201).send(particular_comments);
});

app.post("/events", (req, res) => {
	console.log(req.body.type);

	res.send({});
});

app.listen(4001, () => {
	console.log("Comments server is running on PORT:4001");
});
