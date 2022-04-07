import { useState, useEffect } from "react";
import axios from "axios";
import { localhostComment } from "./App";

function CommentList({ postId }) {
	let [comments, setComments] = useState([]);

	const fetchComments = async () => {
		const res = await axios.get(
			`${localhostComment}/posts/${postId}/comments`
		);
		setComments(res.data);
	};

	useEffect(() => {
		fetchComments();
	}, []);

	let renderedComments = comments.map((comment) => {
		return <li key={comment.commentID}>{comment.content}</li>;
	});

	return <ul>{renderedComments}</ul>;
}

export default CommentList;
