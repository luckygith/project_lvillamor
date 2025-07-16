import { useEffect } from "react";

function useModalClose(isOpen, onClose = () => {}) {
	useEffect(() => {
		if (!isOpen) return; // stop the effect if modal is not open

		const handleEscapeClose = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		const handleModalBackgroundClick = (e) => {
			if (e.target.classList.contains("main__modal-overlay")) {
				onClose();
			}
		};

		const handleClickOutside = (e) => {
			const modal = document.querySelector(".menu-modal");
			if (modal && !modal.contains(e.target)) {
				onClose();
			}
		};

		document.addEventListener("keydown", handleEscapeClose);
		document.addEventListener("mousedown", handleModalBackgroundClick);
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("keydown", handleEscapeClose);
			document.removeEventListener("mousedown", handleModalBackgroundClick);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);
}

export default useModalClose;
