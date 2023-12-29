// Dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

// The page for viewing other user's profile.
const UserProfile = () => {
	// Get the username from the url: http://localhost:3000/user/dropkickedchild
	const { username } = useParams();
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				// Send API GET request to the backend asking for the safe user object.
				const response = await axios.get(`/profile/user/${username}`);
				setUserData(response.data);
			} catch (error) {
				setError(
					error.response
						? error.response.data.error
						: "An error occurred"
				);
			}
		};

		fetchUserData();
	}, [username]);

	// Error elements
	if (error) {
		// What is displayed when an error occured during the API request.
		return <p>Error: {error}</p>;
	}

	// Loading elements
	if (!userData) {
		// What is displayed when the API request is taking longer to get.
		return <p>Loading...</p>;
	}

	/* userData fields
        _id
        username
        role
        profilePicture
        createdAt
        updatedAt
    */

	return (
		<div>
			<h1>User Profile</h1>
			<p>user id: {userData._id}</p>
			<p>username: {userData.username}</p>
			<p>role: {userData.role}</p>
			<p>profile picture: {userData.profilePicture}</p>
			<p>
				created at time:{" "}
				{new Date(userData.createdAt).toLocaleDateString("en-US")}
			</p>
			<p>
				updated at time:{" "}
				{new Date(userData.updatedAt).toLocaleDateString("en-US")}
			</p>
		</div>
	);
};

// Export
export default UserProfile;
