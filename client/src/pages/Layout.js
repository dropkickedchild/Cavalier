// Dependencies
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/Layout.module.css";

// What is displayed on all the pages
const Layout = () => {
	return (
		<>
			<Header />

			<nav>
				<ul>
					<li className={styles.linkContainer}>
						<Link className={styles.navLink} to="/">
							Home
						</Link>
					</li>
					<li className={styles.linkContainer}>
						<Link className={styles.navLink} to="/test">
							Test
						</Link>
					</li>
					<li className={styles.linkContainer}>
						<Link className={styles.navLink} to="/404">
							404 Page
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

// Export
export default Layout;
