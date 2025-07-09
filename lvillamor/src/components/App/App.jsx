import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Viewer from "../Viewer/Viewer";

const [activeModal, setActiveModal] = useState(null);

function App() {
	const handleAbout = () => {
		setActiveModal("About");
		console.log("about");
	};

	const handleResume = () => {
		console.log("resume");
	};

	const handleProject1 = () => {
		console.log("project1");
	};

	const handleProject2 = () => {
		console.log("project2");
	};

	const handleProject3 = () => {
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
				<Viewer />
			</div>
		</div>
	);
}

export default App;
