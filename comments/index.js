const express = require("express");
const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());

// fake db
const commentsByPostID = {};
// {
//     id:[commentId, content],
//     id:[commentId, content]
// }

app.get("/posts/:id/comments", (req, res) => {
	res.status(200).json(commentsByPostID);
});

app.post("/posts/:id/comments", (req, res) => {
	const commentID = randomBytes(4).toString("hex");

	const particular_comments = commentsByPostID[req.params.id] || [];

	particular_comments.push({ commentID, content: req.body.content });

	commentsByPostID[req.params.id] = particular_comments;

	res.status(201).send(particular_comments);
});

app.listen(4001, () => {
	console.log("Comments server is running on PORT:4001");
});
