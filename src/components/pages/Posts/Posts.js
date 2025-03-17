import { Container, Button, Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPostById } from "../../../redux/postsRedux";
import style from "./Posts.module.scss";
import { removePost } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";

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
				<h5 className={style.title}>{post.title}</h5>
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
			<p>
				<span className="fw-bold">Published: </span>
				{post.publishedDate}
			</p>
			<p>{post.content}</p>
		</Container>
	);
};
export default Posts;
