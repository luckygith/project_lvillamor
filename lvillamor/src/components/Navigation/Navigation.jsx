import "./Navigation.css";

import React from "react";

function Navigation({
	handleAbout,
	handleResume,
	handleProject1,
	handleProject2,
	handleProject3,
	handleProject4,
}) {
	const handleAboutClick = () => {
		handleAbout();
	};

	const handleResumeClick = () => {
		handleResume();
	};

	const handleProject1Click = () => {
		handleProject1();
	};

	const handleProject2Click = () => {
		handleProject2();
	};

	const handleProject3Click = () => {
		handleProject3();
	};

	const handleProject4Click = () => {
		handleProject4();
	};

	return (
		<>
			<section className="navigation">
				<div className="navigation__button-container">
					<button
						className="navigation__about"
						onClick={handleAboutClick}
					>
						About
					</button>
					<button
						className="navigation__resume"
						onClick={handleResumeClick}
					>
						Resume
					</button>
					<button
						className="navigation__project-1"
						onClick={handleProject1Click}
					>
						Project 1
					</button>
					<button
						className="navigation__project-2"
						onClick={handleProject2Click}
					>
						Project 2
					</button>
					<button
						className="navigation__project-3"
						onClick={handleProject3Click}
					>
						Project 3
					</button>
					<button
						className="navigation__project-4"
						onClick={handleProject4Click}
					>
						Project 4
					</button>
				</div>
			</section>
		</>
	);
}

export default Navigation;
