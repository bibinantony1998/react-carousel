import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ReactCarousel } from "./react-carousel";

let container = document.getElementById("root");
if (!container) {
	container = document.createElement("div");
	container.id = "root";
	document.body.appendChild(container);
}
const root = createRoot(container);

root.render(
	<ReactCarousel pageSize={2}>
		<div>test</div>
		<div>test 2</div>
		<div>test 3</div>
		<div>test 4</div>
		<div>test 5</div>
		<div>test 6</div>
	</ReactCarousel>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
