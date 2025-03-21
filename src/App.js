import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Posts/Posts";
import EditPost from "./components/pages/EditPost/EditPost";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import AddPost from "./components/pages/AddPost/AddPost";
import Category from "./components/pages/Category/Category";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<Container>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/edit/:id" element={<EditPost />} />
					<Route path="/about" element={<About />} />
					<Route path="/post/add" element={<AddPost />} />
					<Route path="/category" element={<Category />} />
					<Route path="/category/:category" element={<Category />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Container>
		</div>
	);
}

export default App;
