import React from "react";
import SingleChannelChart from "../components/SingleChannelChart";

import { shallow } from "enzyme";

describe("SingleChannelChart", () => {
	it("should render chart for a single channel correctly", () => {
		const component = shallow(<SingleChannelChart />);

		expect(component).toMatchSnapshot();
	});
});
