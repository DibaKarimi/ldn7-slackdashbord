import { Bar, defaults } from "react-chartjs-2";

defaults.font.family = "Varela Round";

const SingleChannelChart = (props) => {
	const state = {
		data: {
			labels: ["Previous Week", "Current Week"],
			datasets: [
				{
					label: "Messages",
					backgroundColor: "#ffa600",
					borderColor: "#003f5c",
					borderWidth: 1,
					hoverBackgroundColor: "#ff7c43",
					hoverBorderColor: "#003f5c",
					data: props.messagesDataSet,
				},
				{
					label: "Reactions",
					backgroundColor: "#ff6361",
					borderColor: "#003f5c",
					borderWidth: 1,
					hoverBackgroundColor: "#d45087",
					hoverBorderColor: "#003f5c",
					data: props.reactionsDataSet,
				},
			],
		},
		// options: {
		// maintainAspectRatio: true,
		// aspectRatio: 2,
		// xAxes: [
		// 	{
		// 		scaleLabel: {
		// 			display: true,
		// 			labelString: "Weeks",
		// 		},
		// 	},
		// ],
		// yAxes: [
		// 	{
		// 		ticks: {
		// 			beginAtZero: true,

		// 			labelString: "Totals",
		// 		},
		// 	},
		// ],
		// },
	};

	const options = {
		// responsive: true,
		maintainAspectRatio: true,
		aspectRatio: 2,
		legend: {
			labels: {
				fontSize: 10,
			},
			display: false,
		},
		type: "bar",
	};

	return (
		<div className="singleChannelChart">
			<Bar data={state.data} options={state.options} />
		</div>
	);
};

export default SingleChannelChart;
