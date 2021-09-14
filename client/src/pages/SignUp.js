import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import axios from "axios";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Container, CssBaseline, TextField, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import PopUpMessage from "../components/PopUpMessage";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[800],
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(2, "auto"),
		lineHeight: "50px",
	},
}));

const SignUp = ({ setToken }) => {
	const classes = useStyles();

	SignUp.propTypes = {
		setToken: PropTypes.func.isRequired,
	};

	const role = useLocation().pathname.split("/")[2];
	const user = useSelector(selectUser);
	const history = useHistory();

	async function SignUpUser(credentials) {
		if (!validEmail) {
			return axios.post(`/api/signUp`, credentials);
		}
	}

	const [name, setName] = useState(" ");
	const [userId, setUserId] = useState(role == 2 ? "mentor" : "");
	const [email, setEmail] = useState(" ");
	const [password, setPassword] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const isValidEmail = (email) => {
		const result = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
		return result;
	};

	const validateEmail = (e) => {
		const email = e.target.value;
		if (!email || isValidEmail(email)) {
			setValidEmail(false);
		} else {
			setValidEmail(true);
		}
	};

	const handleClickLogin = () => {
		setToken("Home");
		history.push(`/login/${role}`);
	};

	const resetForm = () => {
		setName("");
		setUserId("");
		setEmail("");
		setPassword("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		SignUpUser({
			name,
			userId,
			email,
			password,
		})
			.then((result) => {
				setToken(false);
				// const path =
				// 	role == 2 ? "/cohorts" : role == 1 ? `/channels/${userId}` : "";
				const isSuccess = result.data.message == "Done" && !validEmail;
				isSuccess && history.push("/Home");
			})
			.catch(() => {});
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form
					className={classes.form}
					onSubmit={(e) => handleSubmit(e)}
					noValidate
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="name"
								name="name"
								variant="filled"
								required
								fullWidth
								id="name"
								label="Name"
								floatingLabel
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="filled"
								required
								fullWidth
								id="MemberID"
								label="Member ID"
								floatingLabel
								name="MemberID"
								autoComplete="Member-ID"
								disabled={role == "2"}
								value={role == "2" ? "mentor" : userId}
								onChange={(e) => setUserId(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="filled"
								required
								fullWidth
								id="email"
								label="Email Address"
								floatingLabel
								name="email"
								autoComplete="email"
								type="email"
								value={email}
								error={validEmail}
								helperText={validEmail ? "Please enter a valid email" : " "}
								onChange={(e) => setEmail(e.target.value)}
								onBlur={validateEmail}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="filled"
								required
								fullWidth
								name="password"
								// value={password}
								label="Password"
								floatingLabel
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<PopUpMessage resetForm={resetForm} />
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link variant="body2" onClick={handleClickLogin}>
								Already have an account? Login
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};
export default SignUp;
