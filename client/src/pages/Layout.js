// Dependencies
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

// What is displayed on all the pages
const Layout = () => {
	return (
		<>
			<Header />

			<nav>
				<ul>
					<li className="layoutNavLinkContainer">
						<Link className="layoutNavLink" to="/">
							Home
						</Link>
					</li>
					<li className="layoutNavLinkContainer">
						<Link className="layoutNavLink" to="/test">
							Test
						</Link>
					</li>
					<li className="layoutNavLinkContainer">
						<Link className="layoutNavLink" to="/404">
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
