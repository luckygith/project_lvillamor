import React from "react";
import { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";
// import useModalClose from "../../hooks/modal";
import react from "../../assets/react.svg";
import "../ImagePreviewModal/ImagePreviewModal.css";
import closeIcon from "../../assets/closeIcon.svg";

const ImagePreviewModal = ({ imageSource, handleCloseImagePreview }) => {
	// const closePreviewModalClick = (e) => {
	// 	console.log("CLOSeCLOE", imagePreviewSource);
	// 	onClose(imagePreviewSource);
	// };
	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	// const handleBackgroundClick = () => {
	// 	onClose(); // just closes the image preview
	// };
	// const [imagePreviewSource, setImagePreviewSource] = useState("");

	// useModalClose(isOpen, onClose);

	return (
		// <div className="preview__modal">
		// 	<button
		// 		className="close__button"
		// 		src={react}
		// 		onClick={closePreviewModalClick}
		// 	></button>
		// 	<img
		// 		src={imageSource}
		// 		alt="Preview"
		// 		className="modal__image"
		// 	/>
		// </div>

		<div
			className="image-preview__modal"
			onClick={handleCloseImagePreview}
		>
			<button
				className="close__button"
				src={closeIcon}
				onClick={handleCloseImagePreview}
			></button>
			<img
				className="image-preview__img"
				src={imageSource}
				alt="Full preview"
			/>
		</div>
	);
};

export default ImagePreviewModal;
