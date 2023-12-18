// Dependencies
import { useAuth } from "../contexts/AuthContext";

// If account is logged in, what is returned is rendered.
// We can use anything from our Account schema.
const LoggedInText = () => {
	const { account } = useAuth();

	return (
		<p>
			authenticated ✅
			<br />
			username: {account.username}
			<br />
			Created at:{" "}
			{new Date(account.createdAt).toLocaleString("en-US", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
			})}
		</p>
	);
};

// If account is logged out, what is returned is rendered.
const LoggedOutText = () => <p>not authenticated ❌</p>;

// Main page
export default function Home() {
	const { isLoggedIn } = useAuth();

	return <>{isLoggedIn ? <LoggedInText /> : <LoggedOutText />}</>;
}
