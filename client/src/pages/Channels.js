//import channels from "../fakeData/channels.json";
import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import Headers from "./Headers";

const Channels = () => {
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
				const sortedChannels = body.channels.sort(
					(firstEl, secondEl) => secondEl.num_members - firstEl.num_members
				);
				console.log(sortedChannels);
				setChannelList(sortedChannels);
				console.log(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	console.log(channelList);
	return (
		<main role="main">
			<div className="container">
				<Headers size="small" />
				<Table responsive className="table table-color table-bordered">
					<thead className="text-center">
						<TableHead />
					</thead>
					<tbody className="text-center">
						{channelList.map((channel, index) => (
							<TableRow channel={channel} key={index} />
						))}
					</tbody>
				</Table>
			</div>
		</main>
	);
};
export default Channels;
