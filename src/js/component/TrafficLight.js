import React from "react";
import PropTypes from "prop-types";

export function TrafficLight(props) {
	return (
		<div>
			<div className="topoflight"></div>
			<div className="main">
				<div className="red"></div>
				<div className="yellow"></div>
				<div className="green"></div>
			</div>
		</div>
	);
}

TrafficLight.propTypes = {
	name: PropTypes.string
};
