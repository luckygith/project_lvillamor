import React from "react";
import useModalClose from "../../hooks/modal";
import "../MenuModal/MenuModal.css";

const MenuModal = ({ isOpen = true, onClose = () => {}, children }) => {
	return (
		<div
			className={`modal-overlay main__modal-overlay  ${
				isOpen ? "modal-open" : ""
			}`}
			onClick={onClose}
		>
			<div
				className="viewer__modal modal-fade-in modal"
				onClick={(e) => e.stopPropagation()} // prevent inner modal clicks from closing or else both coexisting opened modals WILL CLOSE
			>
				<div className="viewer__section">{children}</div>
			</div>
		</div>
	);
};

export default MenuModal;
