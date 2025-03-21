import { Container, Button, Modal } from "react-bootstrap";
import { useParams, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPostById } from "../../../redux/postsRedux";
import { removePost } from "../../../redux/postsRedux";
import dateToStr from "../../../utils/dateToStr";

const Posts = () => {
	const { id } = useParams();
	const post = useSelector((state) => getPostById(state, id));
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	if (!post) return <Navigate to="/" />;
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleRemovePost = () => {
		dispatch(removePost(post.id));
	};

	return (
		<Container>
			<div className="mt-5 d-flex justify-content-between align-items-center">
				<h5>{post.title}</h5>
				<div>
					<Link className="mt-5" key={post.id} to={`/post/edit/${post.id}`}>
						<Button className="me-2" variant="outline-primary">
							Edit
						</Button>
					</Link>
					<Button
						className="me-2"
						variant="outline-danger"
						onClick={handleShow}
					>
						Delate
					</Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Are you sure?</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							This operation will completly remove this post from the app. Are
							you sure you want to do that?
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
							<Button variant="danger" onClick={handleRemovePost}>
								Remove
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
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
			<p dangerouslySetInnerHTML={{ __html: post.content }} />
		</Container>
	);
};
export default Posts;
