// Dependencies
import { Fragment, useState } from "react";
import {
	AppBar,
	IconButton,
	Avatar,
	Popover,
	List,
	ListSubheader,
	ListItemButton,
} from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import AuthModal from "./AuthModal";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/Header.module.css";

// Header
export default function Header() {
	const { isLoggedIn, account, logout } = useAuth();

	const [anchorEl, setAnchorEl] = useState(null);
	const [popover, setPopover] = useState(false);
	const [authModal, setAuthModal] = useState(false);
	const [register, setRegister] = useState(false);

	const openPopover = (e) => {
		setPopover(true);
		setAnchorEl(e.currentTarget);
	};

	const closePopover = () => {
		setPopover(false);
		setAnchorEl(null);
	};

	const clickLogin = () => {
		setRegister(false);
		setAuthModal(true);
		closePopover();
	};

	const clickRegister = () => {
		setRegister(true);
		setAuthModal(true);
		closePopover();
	};

	return (
		<AppBar className={styles.header} position="static">
			<h1>Cavalier</h1>

			<IconButton onClick={openPopover}>
				<OnlineIndicator online={isLoggedIn}>
					<Avatar
						src={account?.profilePicture || ""}
						alt={account?.username || ""}
					/>
				</OnlineIndicator>
			</IconButton>

			<Popover
				anchorEl={anchorEl}
				open={popover}
				onClose={closePopover}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<List style={{ minWidth: "100px" }}>
					<ListSubheader style={{ textAlign: "center" }}>
						Welcome, {isLoggedIn ? account.username : "Guest"}
					</ListSubheader>

					{isLoggedIn ? (
						<ListItemButton onClick={logout}>Logout</ListItemButton>
					) : (
						<Fragment>
							<ListItemButton onClick={clickLogin}>
								Login
							</ListItemButton>
							<ListItemButton onClick={clickRegister}>
								Register
							</ListItemButton>
						</Fragment>
					)}
				</List>
			</Popover>

			<AuthModal
				open={authModal}
				close={() => setAuthModal(false)}
				isRegisterMode={register}
				toggleRegister={() => setRegister((prev) => !prev)}
			/>
		</AppBar>
	);
}
