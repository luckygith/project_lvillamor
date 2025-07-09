import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Viewer from "../Viewer/Viewer";

function App() {
	const [activeModal, setActiveModal] = useState("");

	const handleAbout = () => {
		setActiveModal("About");
		console.log("about");
	};

	const handleResume = () => {
		setActiveModal("Resume");
		console.log("resume");
	};

	const handleProject1 = () => {
		setActiveModal("Project1");
		console.log("project1");
	};

	const handleProject2 = () => {
		setActiveModal("Project2");
		console.log("project2");
	};

	const handleProject3 = () => {
		setActiveModal("Project3");
		console.log("project3");
	};

	return (
		<div className="page">
			<div className="page__content">
				<Main
					handleAbout={handleAbout}
					handleResume={handleResume}
					handleProject1={handleProject1}
					handleProject2={handleProject2}
					handleProject3={handleProject3}
				/>
				<Viewer activeModal={activeModal} />
			</div>
		</div>
	);
}

export default App;
