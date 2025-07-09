import React from "react";

import "./Viewer.css";

function Viewer({ activeModal }) {
	return (
		<div className="viewer">
			{activeModal === "About" && (
				<div className="viewer__modal">
					About Me
					<div className="About__section">
						<p className="About__paragraph">sldkfjsldkf</p>
					</div>
				</div>
			)}
			{activeModal === "Resume" && (
				<div className="viewer__modal">
					Resume
					<div className="About__section">
						<p className="About__paragraph">
							A coffee shop menu created for online presence for customers to
							view menu
						</p>
					</div>
				</div>
			)}
			{activeModal === "Project1" && (
				<div className="viewer__modal">
					Project1
					<div className="About__section">
						<p className="About__paragraph">Coffe </p>
					</div>
				</div>
			)}
			{activeModal === "Project2" && (
				<div className="viewer__modal">
					Project2
					<div className="About__section">
						<p className="About__paragraph">sldkfjsldkf</p>
					</div>
				</div>
			)}
			{activeModal === "Project3" && (
				<div className="viewer__modal">
					Project3
					<div className="About__section">
						<p className="About__paragraph">sldkfjsldkf</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Viewer;
