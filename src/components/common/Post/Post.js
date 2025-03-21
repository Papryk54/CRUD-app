import { Button, Card } from "react-bootstrap";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

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
							<p className="mb-0">
								<span className="fw-bold">Published: </span>
								{dateToStr(post.publishedDate)}
							</p>
							<p className="mb-3">
								<span className="fw-bold">Category: </span>
								{post.category.charAt(0).toUpperCase() + post.category.slice(1)}
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
