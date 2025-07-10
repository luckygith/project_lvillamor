import React from "react";
import "./Project2.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";
import project2mainPage from "../../assets/project2mainPage.png";
import project2fullPage from "../../assets/project2fullPage.png";

const Project2 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project2__content">
				<div className="project2__description  project__description viewer__section-description">
					<h1 className="project__title">Coffee Shop Online Menu</h1>A coffee
					shop menu created for online presence for customers to view menu. With
					just a vanilla javascript coding I included simple features with the
					following: Semantic HTML5 - Flexbox - Positioning - Flat BEM file
					structure - A custom form - CSS animation and transform. The is
					continuous single page scrolling website that is also responsive to
					fit all kinds of screens from desktop to mobile.
				</div>

				<div className="project2__image-container project__image-container">
					<img
						src={project2mainPage}
						alt=""
						className="project2__image-main project2__image"
					/>
					<img
						src={project2fullPage}
						alt=""
						className="project2__image__full project2__image"
					/>
				</div>
			</div>
		</MenuModal>
	);
};

export default Project2;
