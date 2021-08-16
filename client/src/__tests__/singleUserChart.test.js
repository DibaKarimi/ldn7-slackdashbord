import React from "react";
import SingleUserChart from "../components/SingleUserChart";

import { shallow } from "enzyme";

describe("SingleUserChart", () => {
	it("should render chart for a single user correctly", () => {
		const component = shallow(<SingleUserChart />);

		expect(component).toMatchSnapshot();
	});
});
