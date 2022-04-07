import { useState } from "react";
import axios from "axios";

//const
const localhost = "http://localhost:4000/posts";

export default function PostCreate() {
	const [title, setTitle] = useState("");

	const submitting = async (e) => {
		e.preventdefault();

		await axios.post(localhost, {
			title,
		});
	};

	return (
		<div className={"container"}>
			<form onSubmit={submitting}>
				<div className={"row m-3"}>
					<label>Title</label>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className='m-3'>
					<button className={"btn btn-danger"} type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
