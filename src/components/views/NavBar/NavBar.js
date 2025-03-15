import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
			<Navbar.Brand
				href="#home"
				className={`text-white me-auto  ${styles.customNavbarBrand}`}
			>
				Blog.app
			</Navbar.Brand>
			<Nav className="ms-auto">
				<Nav.Link href="/" className="text-white">
					Home
				</Nav.Link>
				<Nav.Link href="/about" className="text-white">
					About
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default NavBar;
