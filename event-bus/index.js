const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/events", (req, res) => {
	const events = req.body;

	app.post("localhost:4000/events", events);
	app.post("localhost:4001/events", events);
	app.post("localhost:4002/events", events);

	res.send({
		status: 200,
		message: "OK",
	});
});

app.listen(5000, () => {
	console.log("Event-bus is running on PORT:", 4005);
});
