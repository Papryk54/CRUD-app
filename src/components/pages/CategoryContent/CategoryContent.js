import { useSelector } from "react-redux";
import { getPostByCategory } from "../../../redux/postsRedux";
import { Card, Button } from "react-bootstrap";
import { Link, useParams  } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

const CategoryContent = (category1) => {
	const { category } = useParams();
	const postByCategory = useSelector((state) =>
		getPostByCategory(state, category)
	);
	const displayPost = postByCategory.length > 0;

	return (
		<div className="row mt-4 mb-4">
			{postByCategory.map((post) => (
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
			{!displayPost && category && <p> No post in this category... </p>}
		</div>
	);
};

export default CategoryContent;
