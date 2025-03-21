import { Container, ListGroup } from "react-bootstrap";
import CategoryContent from "../CategoryContent/CategoryContent";
import { Link } from "react-router-dom";

const Category = () => {

	return (
		<Container>
			<ListGroup>
				<ListGroup.Item>
					<Link className="mt-5" to="/category/Sport">
						Sport
					</Link>
				</ListGroup.Item>
				<ListGroup.Item>
					<Link className="mt-5" to="/category/News">
						News
					</Link>
				</ListGroup.Item>
				<ListGroup.Item>
					<Link className="mt-5" to="/category/Movies">
						Movies
					</Link>
				</ListGroup.Item>
			</ListGroup>
			<CategoryContent />
		</Container>
	);
};

export default Category;
