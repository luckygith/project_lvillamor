import React from "react";
import "./Resume.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";

const Resume = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="resume__content">
				<div className="resume__description viewer__section-description">
					<p className="viewer__section-unfinished">Under construction</p>
				</div>
			</div>
		</MenuModal>
	);
};

export default Resume;
