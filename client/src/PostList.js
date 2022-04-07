import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

import { localhostPost } from "./App";

export default function PostList() {
	const [posts, setPosts] = useState({});

	const fetchData = async () => {
		const req = await axios.get(`${localhostPost}/posts`);
		setPosts(req.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const renderedPosts = Object.values(posts).map((p) => {
		return (
			<div
				className='card'
				style={{ width: "30%", marginBottom: "10px" }}
				key={p.id}>
				<div className='card-body'>
					<h4>{p.title}</h4>
					<CommentList postId={p.id} />
					<CommentCreate postId={p.id} />
				</div>
			</div>
		);
	});

	return (
		<div className={"d-flex flex-row flex-wrap justify-content-between"}>
			{renderedPosts}
		</div>
	);
}
