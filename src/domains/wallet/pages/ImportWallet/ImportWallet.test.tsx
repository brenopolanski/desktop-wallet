import React from "react";
import { act, fireEvent, render, RenderResult } from "testing-library";

import { ImportWallet } from "./ImportWallet";

describe("Wallet / Import", () => {
	let rendered: RenderResult;
	const networks = [
		{
			id: 1,
			name: "ARK Ecosystem",
			icon: "Ark",
		},
		{
			id: 2,
			name: "Ethereum",
			icon: "Ethereum",
		},
		{
			id: 3,
			name: "Bitcoin",
			icon: "Bitcoin",
		},
	];

	beforeEach(() => {
		rendered = render(<ImportWallet networks={networks} />);
	});

	it("should render", () => {
		const { container, asFragment } = rendered;

		expect(container).toBeTruthy();
		expect(asFragment()).toMatchSnapshot();
	});

	it("should navigate between steps", () => {
		const { getByTestId } = rendered;

		const selectAssetInput = getByTestId("select-asset__input");
		expect(selectAssetInput).toBeTruthy();

		act(() => {
			fireEvent.change(selectAssetInput, { target: { value: "Bitco" } });
		});

		act(() => {
			fireEvent.keyDown(selectAssetInput, { key: "Enter", code: 13 });
		});

		// Check network is selected
		expect(getByTestId("select-asset__selected-Bitcoin")).toBeTruthy();

		const continueBtn = getByTestId("import-wallet__next-step--button");
		expect(continueBtn).toBeTruthy();

		act(() => {
			// Click continue button to go to next step
			fireEvent.click(continueBtn);
		});

		// Check if second step is rendered
		const addressToggle = getByTestId("import-wallet__address-toggle");
		expect(addressToggle).toBeTruthy();

		act(() => {
			// Toggle qr code (appear)
			fireEvent.click(addressToggle);
		});

		const passwordInput = getByTestId("import-wallet__password");

		act(() => {
			// Change password input value
			fireEvent.keyUp(passwordInput, { key: "test" });
		});

		const previousBtn = getByTestId("import-wallet__prev-step--button");

		act(() => {
			// Go to previous step
			fireEvent.click(previousBtn);
		});

		// Check if previous step is rendered
		expect(getByTestId("select-asset__input")).toBeTruthy();
	});
});