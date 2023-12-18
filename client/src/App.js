// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Error from "./pages/Error";

// Setup Browser Router
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="test" element={<Test />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
