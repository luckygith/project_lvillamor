import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Viewer from "../Viewer/Viewer";

function App() {
	return (
		<div className="page">
			<div className="page__content">
				<Main />
				<Viewer />
			</div>
		</div>
	);
}

export default App;
