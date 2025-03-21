import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import dateToStr from "../../../utils/dateToStr";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ actionText, action, postData }) => {
	const [formData, setFormData] = useState(postData);
	const [startDate, setStartDate] = useState(postData.publishedDate);
	const [contentError, setContentError] = useState(false);
	const [dateError, setDateError] = useState(false);

	const navigate = useNavigate();
	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm();

	const handleDateChange = (date) => {
		const formattedDate = dateToStr(date);
		setFormData((prevState) => ({
			...prevState,
			publishedDate: formattedDate,
		}));
		setStartDate(date);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleQuillChange = (content) => {
		if (content === "<p><br></p>") {
			setContentError(true);
		}
		setFormData((prevState) => ({ ...prevState, content }));
	};

	const handleSubmit = (e) => {
		setContentError(!formData.content);
		setDateError(!formData.publishedDate);
		if (!formData.content || !formData.publishedDate) {
		} else {
			action(e, formData);
			setFormData({
				title: "",
				author: "",
				publishedDate: "",
				shortDescription: "",
				content: "",
				category: "",
			});
			navigate("/");
		}
	};

	return (
		<Container>
			<Form>
				<div className="col-6">
					<Form.Group className="mb-3">
						<Form.Label>Title</Form.Label>
						<Form.Control
							{...register("title", {
								required: "This field is required",
								minLength: {
									value: 3,
									message: "Title must be at least 3 characters long",
								},
							})}
							value={formData.title}
							onChange={handleChange}
							type="text"
							placeholder="Enter title"
						/>
						{errors.title && (
							<small className="d-block form-text text-danger mt-2">
								{errors.title.message}
							</small>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Author</Form.Label>
						<Form.Control
							{...register("author", {
								required: "This field is required",
								minLength: {
									value: 3,
									message: "Title must be at least 3 characters long",
								},
							})}
							type="text"
							placeholder="Author"
							name="author"
							value={formData.author}
							onChange={handleChange}
						/>
						{errors.author && (
							<small className="d-block form-text text-danger mt-2">
								{errors.author.message}
							</small>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Published Date</Form.Label>
						<br></br>
						<DatePicker selected={startDate} onChange={handleDateChange} />
					</Form.Group>
					{dateError && (
						<small className="d-block form-text text-danger mt-2">
							Date can't be empty
						</small>
					)}
				</div>
				<Form.Group className="mb-3">
					<Form.Label>Category</Form.Label>
					<Form.Select
						value={formData.category}
						name="category"
						onChange={handleChange}
					>
						<option value="Sport">Sport</option>
						<option value="News">News</option>
						<option value="Movies">Movies</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Short description</Form.Label>
					<Form.Control
						{...register("shortDescription", {
							required: "This field is required",
							minLength: {
								value: 3,
								message: "Description must be at least 3 characters long",
							},
							maxLength: {
								value: 30,
								message: "That's to long descryption (max 30 characters)",
							},
						})}
						as="textarea"
						rows={3}
						name="shortDescription"
						placeholder="Short description"
						value={formData.shortDescription}
						onChange={handleChange}
					/>
					{errors.shortDescription && (
						<small className="d-block form-text text-danger mt-2">
							{errors.shortDescription.message}
						</small>
					)}
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Main Content</Form.Label>
					<ReactQuill
						theme="snow"
						value={formData.content}
						onChange={handleQuillChange}
					/>
				</Form.Group>
				{contentError && (
					<small className="d-block form-text text-danger mt-2">
						Content can't be empty
					</small>
				)}
				<Button
					className="mt-3"
					variant="outline-primary"
					type="submit"
					onClick={validate(handleSubmit)}
				>
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
