import { useState } from "react";
import axios from "axios";

import { localhostPost } from "./App";

export default function PostCreate() {
	const [newPost, setNewPost] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post(`${localhostPost}/posts`, {
			newPost,
		});
		setNewPost("");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className={"form-group row m-3"}>
					<label>Title</label>
					<input
						value={newPost}
						className={"form-control"}
						onChange={(e) => setNewPost(e.target.value)}
					/>
				</div>
				<button className={"btn btn-danger"}>Submit</button>
			</form>
		</div>
	);
}
