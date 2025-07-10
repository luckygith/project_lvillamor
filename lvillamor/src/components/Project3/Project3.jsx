import React from "react";
import "./Project3.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";
import project3features from "../../assets/project3features.jpg";
import project3login from "../../assets/project3login.jpg";
import project3profile from "../../assets/project3profile.jpg";

const Project3 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project3__content">
				<div className="project3__description project__description viewer__section-description">
					My first crack at api fetching collaborating with live feed of online
					weather api source from WeatherAPI. I used another api fetch feature
					to a clothingitems database that is created by the user themselves and
					correlates with the weather to decide what is shown on the screen
					based on compatibility of weather as registered by the user via
					initial input. Some included parameters shown are current dates and
					geolocation. Technologies and techniques used in this project
					includes: -The basics of React and Redux -How to build React apps with
					Create React App -Modern React syntax, called hooks -Understanding and
					correctly using the this keyword -Authorization and authentication
				</div>
				<div className="project3__image-container project__image-container">
					<img
						src={project3features}
						alt=""
						className="project3__image-desktop project3__image"
					/>
					<img
						src={project3login}
						alt=""
						className="project3__image__register project3__image"
					/>
					<img
						src={project3profile}
						alt=""
						className="project__image-tablet project3__image"
					/>
				</div>
				<div className="project4__footer project__footer">
					DOMAIN NAME: bnene.com
					[api.wtwr.bnene.com](https://api.wtwr.bnene.com)
					[wtwr.bnene.com](https://wtwr.bnene.com)
					[www.wtwr.bnene.com](https://www.wtwr.bnene.com)
				</div>
			</div>
		</MenuModal>
	);
};

export default Project3;
