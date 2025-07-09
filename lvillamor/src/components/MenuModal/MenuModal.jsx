import React from "react";
import useModalClose from "../../hooks/modal";

const MenuModal = ({ isOpen = true, onClose = () => {}, children }) => {
	useModalClose(isOpen, onClose);

	return (
		<div className="viewer__modal modal">
			<div className="viewer__section">{children}</div>
		</div>
	);
};

export default MenuModal;
