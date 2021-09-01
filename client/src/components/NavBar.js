import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import cyfBrand from "../images/cyf_brand.png";
import "../pages/Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));

const NavBar = ({ setToken }) => {
	const classes = useStyles();
	const user = useSelector(selectUser);
	const [collapsed, setCollapsed] = useState(true);
	NavBar.propTypes = {
		setToken: PropTypes.func.isRequired,
	};
	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar className="navbar" color="light" light>
				<NavbarBrand href="/" className="mr-auto">
					<img className="cyf_logo" src={cyfBrand} alt="CYF logo" />
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="" />
				<Collapse isOpen={!collapsed} navbar className="collapsedItems">
					<Nav navbar>
						<NavItem>
							<NavLink href="/login">Login</NavLink>
						</NavItem>
						<NavItem
							onClick={() => {
								setToken("logout");
							}}
						>
							<NavLink
								href="/logout"
								onClick={() => {
									setToken("logout");
								}}
							>
								Logout
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://codeyourfuture.io/about/">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				<NavbarBrand>
					<Avatar className={classes.orange}>
						{user && user.name.trim().charAt(0).toUpperCase()}
					</Avatar>
				</NavbarBrand>
			</Navbar>
		</div>
	);
};

export default NavBar;
