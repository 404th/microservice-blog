const express = require("express");
const app = express();

app.use(express.json());

app.post("/event", (req, res) => {
	console.log("Hello world!");
});

app.listen(4003, () => {
	console.log("Moderation server is running on Port:", 4003);
});
