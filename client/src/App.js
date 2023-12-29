// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";
import TOS from "./pages/TOS";

// Setup Browser Router
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="tos" element={<TOS />} />
					<Route path="privacy" element={<Privacy />} />
					<Route path="/user/:username" element={<UserProfile />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
