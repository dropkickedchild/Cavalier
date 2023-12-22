// Dependencies
import styles from "../styles/errorPage.module.css";

// What is displayed when the URL is invalid
const Error = () => {
	return (
		<>
			<h1 className={styles.errorCode}>404</h1>
			<h2>try again later</h2>
		</>
	);
};

// Export
export default Error;
