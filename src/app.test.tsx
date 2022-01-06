/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import App from "./app";

test("renders hello react", () => {
	render(<App />);
	const h1Element = screen.getByText(/Hello React/);
	expect(h1Element).toBeInTheDocument();
});
