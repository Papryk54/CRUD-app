import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PostForm = ({ actionText, action, postData }) => {
	const [formData, setFormData] = useState(postData);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		action(e, formData);
		setFormData({
			title: "",
			author: "",
			publishedDate: "",
			shortDescription: "",
			content: "",
		});
		navigate("/");
	};

	return (
		<Container>
			<Form>
				<div className="col-6">
					<Form.Group className="mb-3">
						<Form.Label>Title</Form.Label>
						<Form.Control
							placeholder="Title"
							type="text"
							name="title"
							value={formData.title}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Author</Form.Label>
						<Form.Control
							type="text"
							placeholder="Author"
							name="author"
							value={formData.author}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Published Date</Form.Label>
						<Form.Control
							type="date"
							name="publishedDate"
							value={formData.publishedDate}
							onChange={handleChange}
							required
						/>
					</Form.Group>
				</div>
				<Form.Group className="mb-3">
					<Form.Label>Short description</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						name="shortDescription"
						placeholder="Short description"
						value={formData.shortDescription}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Main Content</Form.Label>
					<Form.Control
						as="textarea"
						name="content"
						rows={10}
						placeholder="Main Content"
						value={formData.content}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Button variant="outline-primary" type="submit" onClick={handleSubmit}>
					{actionText}
				</Button>
			</Form>
		</Container>
	);
};

PostForm.propTypes = {
	action: PropTypes.func.isRequired,
	actionText: PropTypes.string.isRequired,
	title: PropTypes.string,
	postAuthor: PropTypes.string,
	content: PropTypes.string,
	category: PropTypes.string,
	publishedDate: PropTypes.string,
	shortDescription: PropTypes.string,
};

export default PostForm;
