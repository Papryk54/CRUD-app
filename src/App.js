import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import NewPost from "./components/pages/NewPost/NewPost";
import Edit from "./components/pages/Edit/Edit";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<p>Hello World!</p>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="/post/new" element={<NewPost />} />
				<Route path="/post/edit/:id" element={<Edit />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
