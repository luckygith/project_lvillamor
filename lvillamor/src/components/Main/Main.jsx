import React from "react";
import { useState } from "react";
import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Viewer from "../Viewer/Viewer";

function Main({
	activeModal,
	handleAbout,
	handleResume,
	handleProject1,
	handleProject2,
	handleProject3,
	handleProject4,
}) {
	const isViewerOpen = Boolean(activeModal);
	const [isNavigationVisible, setIsNavigationVisible] = useState(false);

	const handleMainTitleClick = () => {
		setIsNavigationVisible(true);
	};

	return (
		<div className="main">
			<section className="main__content">
				<h1
					className="main__title"
					onClick={handleMainTitleClick}
				>
					LVillamor
				</h1>
				{isNavigationVisible && (
					<Navigation
						handleAbout={handleAbout}
						handleResume={handleResume}
						handleProject1={handleProject1}
						handleProject2={handleProject2}
						handleProject3={handleProject3}
						handleProject4={handleProject4}
						isNavigationVisible={isNavigationVisible}
					/>
				)}
			</section>
			<section className={isViewerOpen ? "main__viewer--open" : "main__viewer"}>
				<Viewer />
			</section>
		</div>
	);
}

export default Main;
