import React from "react";
import TableHead from "../components/TableHead";

import { shallow } from "enzyme";

describe("TableHead", () => {
	it("should render table head correctly", () => {
		const component = shallow(<TableHead />);

		expect(component).toMatchSnapshot();
	});
});
