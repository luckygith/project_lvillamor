import React from "react";
import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Viewer from "../Viewer/Viewer";

function Main({
	handleAbout,
	handleResume,
	handleProject1,
	handleProject2,
	handleProject3,
}) {
	return (
		<div className="main">
			<section className="main__content">
				<h1 className="main__title">LVillamor</h1>
				<Navigation
					handleAbout={handleAbout}
					handleResume={handleResume}
					handleProject1={handleProject1}
					handleProject2={handleProject2}
					handleProject3={handleProject3}
				/>
			</section>
			<section className="main__viewer">
				<Viewer />
			</section>
		</div>
	);
}

export default Main;
