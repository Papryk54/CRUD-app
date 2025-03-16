import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Edit = () => {
	return (
		<Container>
			<Link className="mt-5" to="/">
				<Button className="me-2" variant="outline-danger">
					Back
				</Button>
			</Link>
			<h1>Edit</h1>
			<p>Edit</p>
		</Container>
	);
};

export default Edit;
