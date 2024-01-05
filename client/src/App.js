// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import our pages from pages/index.js
import { Layout, Home, UserProfile, Error, Privacy, TOS } from "./pages/index";

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
