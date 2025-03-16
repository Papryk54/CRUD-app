import { Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";

const AddPostForm = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishedDate, setPublishedDate] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [content, setContent] = useState("");
	const dispatch = useDispatch();
	const handleAddPost = (e) => {
		e.preventDefault();
		dispatch(
			addPost({ title, author, publishedDate, shortDescription, content })
		);
		setTitle("");
		setAuthor("");
		setPublishedDate("");
		setShortDescription("");
		setContent("");
		handleNavigatToHome();
	};
	const navigate = useNavigate();
	const handleNavigatToHome = () => {
		navigate("/");
	};
	
	return (
		<Container>
			<Form>
				<div className="col-6">
					<Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
						<Form.Label>Title</Form.Label>
						<Form.Control
							placeholder="Title"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Author</Form.Label>
						<Form.Control
							placeholder="Author"
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Published</Form.Label>
						<Form.Control
							placeholder="Published"
							onChange={(e) => setPublishedDate(e.target.value)}
						/>
					</Form.Group>
				</div>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Short description</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Short description"
						onChange={(e) => setShortDescription(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Main Content</Form.Label>
					<Form.Control
						as="textarea"
						rows={10}
						placeholder="Main Content"
						onChange={(e) => setContent(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<Button className="me-2" variant="outline-primary" onClick={handleAddPost}>
				Add Post
			</Button>
		</Container>
	);
};
export default AddPostForm;
