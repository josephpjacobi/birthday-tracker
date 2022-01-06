/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import regeneratorRuntime from "regenerator-runtime";
import React from "react";
import App from "../app";

import { Builder, By, Key } from "selenium-webdriver";

test("renders hello react", () => {
	render(<App />);
	const h1Element = screen.getByText(/Hello React/);
	expect(h1Element).toBeInTheDocument();
});

test("can use webdriver", () => {
	async function example() {
		let driver = await new Builder().forBrowser("chrome").build();
		await driver.get("http://google.com");
		await driver
			.findElement(By.name("q"))
			.sendKeys("Selenium Test", Key.RETURN);
	}

	example();
});
