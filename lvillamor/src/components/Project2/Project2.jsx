import React from "react";
import "./Project2.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";

const Project2 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project2__content">
				<div className="project2__description  project__description viewer__section-description">
					A coffee shop menu created for online presence for customers to view
					menu
				</div>
				<div className="project2__image-container project__image-container">
					<img
						src={}
						alt=""
						className="project2__image-desktop project2__image"
					/>
					<img
						src=""
						alt=""
						className="project2__image__register project2__image"
					/>
					<img
						src=""
						alt=""
						className="project__image-tablet project2__image"
					/>
					<img
						src=""
						alt=""
						className="project2__mobile project2__image"
					/>
				</div>
			</div>
		</MenuModal>
	);
};

export default Project2;
