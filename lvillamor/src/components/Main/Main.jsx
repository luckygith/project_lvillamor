import React from "react";
import "./Main.css";
import Navigation from "../Navigation/Navigation";
import Viewer from "../Viewer/Viewer";

function Main() {
	return (
		<div className="main">
			<section className="main__content">
				<h1 className="main__title">L. Villamor</h1>
				<Navigation />
			</section>
			<section className="main__viewer">
				<Viewer />
			</section>
		</div>
	);
}

export default Main;
