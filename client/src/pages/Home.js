import ChannelButton from "../components/Button";
import Footer from "../components/Footer";
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
		<main>
			<div className="introMessage">
				<h3>Hi there, welcome to CYF Slacktastic dashboard!</h3>
				<h4>
					This site allows you to access all sorts of stats about the Code Your
					Future slack channels and users.
				</h4>
			</div>
			<ChannelButton setToken={setToken} />
			<div className="container d-flex justify-content-around mt-5">
				<Card content="Admin" setToken={setToken} />
				<Card content="Mentor" setToken={setToken} />
				<Card content="Trainee" setToken={setToken} />
			</div>
			<Footer />
		</main>
	);
};
export default Home;
