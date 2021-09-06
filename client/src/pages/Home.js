// import ChannelButton from "../components/Button";
import HomeUserButtons from "../components/HomeUserButtons";
import "./Home.css";
import PropTypes from "prop-types";
import Card from "../components/Card";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(2),
		},
	},
}));
const Home = ({ setToken }) => {
	Home.propTypes = {
		setToken: PropTypes.func.isRequired,
	};
	const classes = useStyles();
	return (
		<div className="homePageContainer">
			<div className="introMessage">
				<h1>Hi there, welcome to CYF Slacktastic dashboard!</h1>
				<h2>
					This site allows you to access all sorts of stats about the Code Your
					Future slack channels and users.
				</h2>
			</div>
			{/* <ChannelButton setToken={setToken} /> */}
			<div className="buttonsContainer">
				<HomeUserButtons content="Admin" setToken={setToken} />
				<HomeUserButtons content="Mentor" setToken={setToken} />
				<HomeUserButtons content="Trainee" setToken={setToken} />
			</div>
		</div>
	);
};
export default Home;
