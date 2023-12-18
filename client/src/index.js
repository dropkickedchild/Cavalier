// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto";

// Root CSS
import "./styles/App.css"; // Base CSS that every page follows

// Component CSS
import "./styles/Header.css"; // CSS classes for the Header component
import "./styles/AuthModal.css"; // CSS classes for the AuthModal component
import "./styles/Layout.css"; // CSS classes for the Layout component

// Page CSS
import "./styles/Error.css"; // CSS classes for the Error page

// Render on the ReactDOM
ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<CssBaseline />
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
