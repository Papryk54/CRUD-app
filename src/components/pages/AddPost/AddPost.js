import { Container } from "react-bootstrap";
import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = () => {
	return (
			<Container className="w-75">
				<h2 className="">Add Post</h2>
				<AddPostForm></AddPostForm>
			</Container>
	);
};
export default AddPost;
