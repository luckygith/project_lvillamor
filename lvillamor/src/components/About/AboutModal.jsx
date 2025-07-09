import React from "react";
import "./AboutModal.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";

const About = ({ isOpen, onClose }) => {
	useModalClose(isOpen, onClose);
	return (
		<MenuModal
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className="project3__description viewer__section-description">
				Follow my journey into creativity and incorporating the things I learn
				along the way!
			</div>
		</MenuModal>
	);
};

export default About;
