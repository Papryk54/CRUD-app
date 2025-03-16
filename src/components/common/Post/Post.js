import { Button, Card } from "react-bootstrap";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
	const posts = useSelector((state) => getAllPosts(state));

	return (
		<div className="row mt-4 mb-4">
			{posts.map((post) => (
				<div key={post.id} className="col-12 col-md-4 ">
					<Card>
						<Card.Body>
							<h5>{post.title}</h5>
							<p className="mb-0">
								<span className="fw-bold">Author: </span>
								{post.author}
							</p>
							<p>
								<span className="fw-bold">Published: </span>
								{post.publishedDate}
							</p>
							<p>{post.shortDescription}</p>
							<Link to={`/post/${post.id}`}>
								<Button>Read more</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
};

export default Post;
