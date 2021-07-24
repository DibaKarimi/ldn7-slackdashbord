import React from "react";
import Headers from "./Headers";
import { useParams } from "react-router-dom";
const Channel = () => {
	const { channelName } = useParams();
    console.log(channelName);
	return (
		<main role="main">
			<div className="container">
				<Headers size="small" />
				<h1>
					Welcome to {channelName.replace(/^./, channelName[0].toUpperCase())}
				</h1>
				{console.log(channelName)}
			</div>
		</main>
	);
};
export default Channel;
