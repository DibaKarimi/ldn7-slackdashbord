import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Login = ({ setToken }) => {
	//const { role } = useParams();
	const role = useLocation().pathname.split("/")[2];
	Login.propTypes = {
		setToken: PropTypes.func.isRequired,
	};
	const classes = useStyles();
	const user = useSelector(selectUser);
	const history = useHistory();
	async function loginUser(credentials) {
		return axios.post(`/api/login`, credentials);
	}
	const [name, setName] = useState(" ");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	const handleClickSignUp = () => {
		setToken("signUp");
		history.push(`/signUp/${role}`);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		loginUser({
			email,
			password,
		})
			.then((result) => {
				console.log(result.data);
				setName(result.data.name);
				dispatch(
					login({
						name: result.data.name,
						loggedIn: true,
						message: true,
						userId: result.data.userId,
					})
				);
				setToken("login");
				const path =
					role == 2
						? "/cohorts"
						: role == 1
						? `/channels/${result.data.userId}`
						: "";
				// TODO : add check for cohort or mentor
				history.push(path);
			})
			.catch(() => {
				dispatch(
					login({
						name: "",
						loggedIn: false,
						message: "Please enter your correct password",
					})
				);
			});
	};
	user && console.log(user && user.name);
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(e) => handleSubmit(e)}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{/* <input
						id="username"
						type="text"
						className="form-control"
						required
						value={name}
					></input> */}
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{/* <input
						id="password"
						type="password"
						className="form-control"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input> */}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Login
					</Button>

					<div className="message">{user && <div>{user.message}</div>}</div>
				</form>
				<Grid container>
					{/* <Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid> */}
					<Grid item>
						<Link variant="body2" onClick={handleClickSignUp}>
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};
export default Login;
