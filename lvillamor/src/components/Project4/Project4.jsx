import React from "react";
import "./Project4.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";
import project4mainPage from "../../assets/project4mainPage.png";
import project4registerModal from "../../assets/project4registerModal.png";
import project4tablet from "../../assets/project4tablet.png";
import project4mobile from "../../assets/project4mobile.png";

const Project4 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project4__content">
				<div className="project4__description  viewer__section-description">
					This a project demonstration created during my time with Tripleten
					bootcamp. It consists of the following features: Javascript, React,
					redux, api fetch, local and third party api.
				</div>
				<div className="project4__image-container project__image-container">
					<img
						src={project4mainPage}
						alt=""
						className="project4__image-desktop project4__image"
					/>
					<img
						src={project4registerModal}
						alt=""
						className="project4__image__register project4__image"
					/>
					<img
						src={project4tablet}
						alt=""
						className="project__image-tablet project4__image"
					/>
					<img
						src={project4mobile}
						alt=""
						className="project4__mobile project4__image"
					/>
				</div>
			</div>
		</MenuModal>
	);
};

export default Project4;
