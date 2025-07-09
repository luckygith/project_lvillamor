import "./Navigation.css";

import React from "react";

function Navigation() {
	return (
		<>
			<section className="navigation">
				<div className="navigation__button-container">
					<button className="navigation__about">About</button>
					<button className="navigation__resume">Resume</button>
					<button className="navigation__project-1">Project 1</button>
					<button className="navigation__project-2">Project 2</button>
					<button className="navigation__project-3">Project 3</button>
				</div>
			</section>
		</>
	);
}

export default Navigation;
