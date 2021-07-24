import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const TableRow = ({ channel }) => {
  const [selectedRow, setSelectedRow] = useState(false);

  function rowSelected() {
    setSelectedRow(!selectedRow);
    console.log(channel.name);
  }

  return (
		<tr className={selectedRow ? "selectedRow" : " "} onClick={rowSelected}>
			<td >
				<Link to={`/channel/${channel.name}`}>{channel.name}</Link>
			</td>
			<td>{channel.num_members}</td>
		</tr>
	);
};

export default TableRow;
