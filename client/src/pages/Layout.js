// Dependencies
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/Layout.module.css";

// What is displayed on all the pages
const Layout = () => {
	return (
		<>
			<Header />

			<Link className={styles.navLink} to="/">
				Home
			</Link>

			<Outlet />
		</>
	);
};

// Export
export default Layout;
