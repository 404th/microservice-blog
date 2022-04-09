const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// fake db
const posts = {};

app.get("/posts", (req, res) => {
	res.send(posts);
});

app.post("/events", (req, res) => {
	const { type, data } = req.body;

	if (type === "PostCreated") {
		posts[data.id] = {
			id: data.id,
			title: data.title,
			comments: [],
		};
	}

	if (type === "CommentCreated") {
		posts[data.postID].comments.push({
			id: data.id,
			content: data.content,
		});
	}

	res.send({});
});

app.listen(4002, () => {
	console.log("Query server is running on Port:", 4002);
});
