import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import {Grid} from "@material-ui/core"

const ChannelList = () => {
	const [channelList, setChannelList] = useState([]);
	useEffect(() => {
		fetch("/api/channelList")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setChannelList(body.channels);
				console.log(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	console.log(channelList);

	const columns = [
		{ field: "id", headerName: "ID", width: 100 },
		{ field: "channelName", headerName: "Channel Name", width: 250 },
		{ field: "numOfMembers", headerName: "Number of Members", width: 250 },
	];

	let channels = [];
	channelList.forEach((channel, index) => {
		let user = {
			id: index + 1,
			channelName: channel.name,
			numOfMembers: channel.num_members
		};
		channels.push(user);
	});

	console.log(channels)

	return (
		<div style={{ height: 750, width: "90%", margin: "auto", marginTop: "5rem", maxWidth: "750px" }}>
			<DataGrid title="Channel List Data" rows={channels} columns={columns} pageSize={10} checkboxSelection />
		</div>
	);
};

export default ChannelList;


// import {useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const ChannelList = () => {

// 	const [channelList, setChannelList] = useState([]);
// 	useEffect(() => {
// 		fetch("/api/channelList")
// 			.then((res) => {
// 				if (!res.ok) {
// 					throw new Error(res.statusText);
// 				}
// 				return res.json();
// 			})
// 			.then((body) => {
// 				setChannelList(body.channels);
// 				console.log(body);
// 			})
// 			.catch((err) => {
// 				console.error(err);
// 			});
// 	}, []);

// 	console.log(channelList);

// 		let channels = [];
// 	channelList.forEach((channel, index) => {
// 		let user = {
// 			id: index + 1,
// 			channelName: channel.name,
// 			numOfMembers: channel.num_members
// 		};
// 		channels.push(user);
// 	});

// 	console.log(channels)


// 	const useStyles = makeStyles({
// 		table: {
// 		  minWidth: 200,
// 		  maxWidth: 500,
// 		  margin: "auto"
// 		},

// 		paper: {
// 			maxWidth: 500,
// 			margin: "auto",
// 			marginTop: "10rem"
// 		}
// 	  });
	  

// 	  const classes = useStyles();

// 	  return (
// 		<TableContainer component={Paper} className={classes.paper}>
// 		  <Table className={classes.table} aria-label="simple table">
// 			<TableHead>
// 			  <TableRow>
// 				<TableCell>Channel Id</TableCell>
// 				<TableCell align="center">Number of Members</TableCell>
// 				<TableCell align="center">Number of Members</TableCell>
// 			  </TableRow>
// 			</TableHead>
// 			<TableBody>
// 			  {channels.map((channel, index) => (
// 				<TableRow key={index}>
// 				  <TableCell component="th" scope="row">
// 					{channel.id}
// 				  </TableCell>
// 				  <TableCell align="center">{channel.channelName}</TableCell>
// 				  <TableCell align="center">{channel.numOfMembers}</TableCell>
// 				</TableRow>
// 			  ))}
// 			</TableBody>
// 		  </Table>
// 		</TableContainer>
// 	  );
// }

// export default ChannelList
