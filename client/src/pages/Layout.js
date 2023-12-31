// Dependencies
import { Outlet } from "react-router-dom"; //, //Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/Layout.module.css"; // eslint-disable-line

/*
	<Link className={styles.navLink} to="/">
		Home
	</Link>
*/

// What is displayed on all the pages
const Layout = () => {
	return (
		<>
			<Header />

			<Outlet />
		</>
	);
};

// Export
export default Layout;
