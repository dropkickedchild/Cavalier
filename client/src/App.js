import { useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";

export default function App() {
	const { isLoggedIn } = useAuth();

	return (
		<div className="App">
			<Header />

			{isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
		</div>
	);
}

const LoggedInText = () => {
	const { account } = useAuth();

	return (
		<p>
			authenticated {account.username} {account.createdAt}
		</p>
	);
};

const LoggedOutText = () => <p>not authenticated</p>;
