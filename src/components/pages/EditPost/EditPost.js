import { Container } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm"

const Edit = () => {
	return (
		<Container className="w-75">
		<h2 className="">Edit Post</h2>
		<EditPostForm></EditPostForm>
	</Container>
	);
};

export default Edit;
