import PostCreate from "./PostCreate";
import PostList from "./PostList";

export const localhostPost = "http://localhost:4000";
export const localhostComment = "http://localhost:4001";

export default function App() {
	return (
		<div className='container'>
			<h1>Create Post</h1>
			<div>
				<PostCreate />
			</div>
			<hr />
			<h1>Post Comment</h1>
			<div>
				<PostList />
			</div>
		</div>
	);
}
