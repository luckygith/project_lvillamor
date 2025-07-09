import React from "react";
import "./Project3.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";

const Project3 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project3__description project__description viewer__section-description">
				My first crack at api fetching collaborating with live feed of online
				weather api source from WeatherAPI. I used another api fetch feature to
				a clothingitems database that is created by the user themselves and
				correlates with the weather to decide what is shown on the screen based
				on compatibility of weather as registered by the user via initial input.
				Some included parameters shown are current dates and geolocation.
			</div>
		</MenuModal>
	);
};

export default Project3;
