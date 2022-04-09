import { useState } from "react";
import axios from "axios";

import { localhostPost } from "./App";

export default function PostCreate() {
	const [title, setTitle] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post(`${localhostPost}/posts`, {
			title,
		});
		setTitle("");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className={"form-group row m-3"}>
					<label>Title</label>
					<input
						value={title}
						className={"form-control"}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<button className={"btn btn-danger"}>Submit</button>
			</form>
		</div>
	);
}
