import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Viewer from "../Viewer/Viewer";

function App() {
	const [activeModal, setActiveModal] = useState("");

	const handleCloseModal = () => {
		setActiveModal("");
	};

	const handleAbout = () => {
		setActiveModal("about");
		console.log("about");
	};

	const handleResume = () => {
		setActiveModal("resume");
		console.log("resume");
	};

	const handleProject1 = () => {
		setActiveModal("project1");
		console.log("project1");
	};

	const handleProject2 = () => {
		setActiveModal("project2");
		console.log("project2");
	};

	const handleProject3 = () => {
		setActiveModal("project3");
		console.log("project3");
	};

	const handleProject4 = () => {
		setActiveModal("project4");
		console.log("project4");
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
					handleProject4={handleProject4}
				/>
				<Viewer
					activeModal={activeModal}
					handleCloseModal={handleCloseModal}
				/>
			</div>
		</div>
	);
}

export default App;
