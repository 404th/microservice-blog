import { useState } from "react";
import axios from "axios";

import { localhostComment } from "./App";

export default ({ postId }) => {
	let [content, setContent] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		await axios.post(`${localhostComment}/posts/${postId}/comments`, {
			content,
		});

		setContent("");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>New Comment</label>
					<input
						className='form-control'
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<button type={"submit"} className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};
