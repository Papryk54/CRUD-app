import styles from "./Home.module.scss";
import Post from "../../common/Post/Post";

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<h3 className="">All posts</h3>
					<Post />
				</div>

	);
};

export default Home;
