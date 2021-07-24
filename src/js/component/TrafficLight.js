import React from "react";

export function TrafficLight(props) {
	const [color, setColor] = React.useState("yellow");
	const redDivClass = "red" + (color === "red" ? " selected" : "");
	return (
		<div>
			<div className="topoflight"></div>
			<div className="main">
				<div
					onClick={() => {
						setColor("red");
					}}
					className={
						"red" + (color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => {
						setColor("yellow");
					}}
					className={
						"yellow" + (color === "yellow" ? " selected" : "")
					}></div>
				<div
					onClick={() => {
						setColor("green");
					}}
					className={
						"green" + (color === "green" ? " selected" : "")
					}></div>
			</div>
		</div>
	);
}
