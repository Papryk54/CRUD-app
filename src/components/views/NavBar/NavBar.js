import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
			<Navbar.Brand
				href="/"
				className={`text-white me-auto  ${styles.customNavbarBrand}`}
			>
				Blog.app
			</Navbar.Brand>
			<Nav className="ms-auto">
				<Nav.Link to="/" as={Link} className="text-white">
					Home
				</Nav.Link>
				<Nav.Link to="/category" as={Link} className="text-white">
					Category
				</Nav.Link>
				<Nav.Link to="/about" as={Link} className="text-white">
					About
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default NavBar;
