import "./App.css";
import Post from "./components/post";
import PostList from "./Data/PostList";
import { useState } from "react";
import Caption from "./components/caption";
function App() {
	const [Posts, setPost] = useState([...PostList]);
	//setPost(...Posts, PostList);
	console.log(typeof Posts);
	const getCaption = (element) => {
		element.preventDefault();
		// console.log(element.target.parentElement.children[0].value);
		let post = {};
		Object.assign(post, Posts[0]);
		let caption = element.target.parentElement.children[0].value;
		post.content = caption;
		let date = new Date();
		// console.log(date);
		post.date = ` ${date.getDate()}-${
			date.getUTCMonth() + 1
		}-${date.getFullYear()}`;
		setPost([post, ...Posts]);
	};
	return (
		<div className="App">
			<Caption handleClick={getCaption} />

			{Posts.map((post) => (
				<Post
					post={post}
					key={Math.random() * 10000 + Math.random() * 10000}
				/>
			))}
		</div>
	);
}

export default App;
