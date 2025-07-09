import React from "react";
import "./Project2.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";

const Project2 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project2__description  project__description viewer__section-description">
				A coffee shop menu created for online presence for customers to view
				menu
			</div>
		</MenuModal>
	);
};

export default Project2;
