import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SideBar } from "../";

describe("SideBar", () => {
	it("should render empty", () => {
		const { container, asFragment } = render(<SideBar />, { wrapper: MemoryRouter });

		expect(container).toBeTruthy();
		expect(asFragment()).toMatchSnapshot();
	});

	it("should render with items", () => {
		const items = [
			{
				key: "general",
				label: "General",
				icon: "general",
				route: "/settings/general",
			},
			{
				key: "peer",
				label: "Peer",
				icon: "peer",
				route: "/settings/peer",
			},
			{
				key: "plugins",
				label: "Plugins",
				icon: "plugin",
				route: "/settings/plugins",
			},
		];

		const { container, asFragment, getAllByRole } = render(<SideBar items={items} />, { wrapper: MemoryRouter });

		expect(container).toBeTruthy();
		expect(getAllByRole("listitem").length).toEqual(3);
		expect(asFragment()).toMatchSnapshot();
	});
});
