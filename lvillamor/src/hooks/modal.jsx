import { useEffect } from "react";

function useModalClose(isOpen, onClose = () => {}) {
	useEffect(() => {
		if (!isOpen) return; // stop the effect if the modal is not open

		const handleEscapeClose = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		const handleModalBackgroundClick = (e) => {
			// that's why you should have a `modal` class name in each modal to be able to universally handle the overlay click
			if (e.target.classList.contains("modal")) {
				onClose();
			}
		};

		const handleClickOutside = (e) => {
			const modal = document.querySelector(".viewer__modal"); // or whatever your modal content class is
			if (modal && !modal.contains(e.target)) {
				onClose();
			}
		};

		document.addEventListener("keydown", handleEscapeClose);
		document.addEventListener("mousedown", handleModalBackgroundClick);
		document.addEventListener("mousedown", handleClickOutside);
		// don't forget to remove both listeners in the clean up function
		return () => {
			document.removeEventListener("keydown", handleEscapeClose);
			document.removeEventListener("mousedown", handleModalBackgroundClick);
			document.addEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]); // watch isOpen to add the listeners only when the modal is open
}

export default useModalClose;
