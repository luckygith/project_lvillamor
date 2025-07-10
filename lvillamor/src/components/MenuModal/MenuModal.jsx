import React from "react";
import useModalClose from "../../hooks/modal";
import "../MenuModal/MenuModal.css";

const MenuModal = ({ isOpen = true, onClose = () => {}, children }) => {
	useModalClose(isOpen, onClose);

	return (
		<div className={`modal-overlay ${isOpen ? "modal-open" : ""}`}>
			<div className="viewer__modal modal-fade-in modal">
				<div className="viewer__section">{children}</div>
			</div>
		</div>
	);
};

export default MenuModal;
