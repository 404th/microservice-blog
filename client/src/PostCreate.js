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
				<div className={"row m-3"}>
					<label>Title</label>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className='m-3'>
					<button className={"btn btn-danger"} type={"submit"}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
