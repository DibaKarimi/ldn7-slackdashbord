import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		minWidth: 200,
		minHeight: 150,
	},
});

const CardRole = ({ content, setToken }) => {
	const classes = useStyles();
	const role = content == "Admin" ? 3 : content == "Mentor" ? 2 : 1;
	return (
		<Link
			style={{
				textDecoration: "none",
				color: "black",
				fontWeight: "lighter",
			}}
			to={{
				pathname: `/login/${role}`,
			}}
			onClick={() => {
				setToken("Home");
			}}
		>
			<Card className={classes.root}>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h1">
							{content}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};
export default CardRole;
