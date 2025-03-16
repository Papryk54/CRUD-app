import styles from "./Home.module.scss";
import Post from "../../common/Post/Post";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<h3 className="">All posts</h3>
			<Post />
			<Link className="mt-5" to="/post/add">
				<Button className="me-2" variant="outline-primary">
					Add Post
				</Button>
			</Link>
		</div>
	);
};

export default Home;
