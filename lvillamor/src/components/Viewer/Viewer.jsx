import React from "react";
import "./Viewer.css";

function Viewer({ activeModal }) {
	return (
		<div className="viewer">
			{activeModal === "About" && <div className="modal">About Me</div>}
			{activeModal === "Resume" && <div className="modal">Resume</div>}
			{activeModal === "Project1" && <div className="modal">Project1</div>}
			{activeModal === "Project2" && <div className="modal">Project2</div>}
			{activeModal === "Project3" && <div className="modal">Project3</div>}
		</div>
	);
}

export default Viewer;
