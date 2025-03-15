// import "./App.css"; - Nie jestem pewien czy powinienem to usuwac czy zostawić?
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Posts/Posts";
import NewPost from "./components/pages/NewPost/NewPost";
import Edit from "./components/pages/Edit/Edit";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<Container>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/new" element={<NewPost />} />
					<Route path="/post/edit/:id" element={<Edit />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Container>
		</div>
	);
}

export default App;
