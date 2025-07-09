import React from "react";
import "./Project4.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";

const Project4 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project4__description project1__description viewer__section-description">
				This a project demonstration created during my time with Tripleten
				bootcamp. It consists of the following features: Javascript, React,
				redux, api fetch, local and third party api.
			</div>
		</MenuModal>
	);
};

export default Project4;
