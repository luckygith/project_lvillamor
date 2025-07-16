import React from "react";
import { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";
import react from "../../assets/react.svg";
import "../ImagePreviewModal/ImagePreviewModal.css";
import closeIcon from "../../assets/closeIcon.svg";

const ImagePreviewModal = ({ imageSource, handleCloseImagePreview }) => {
	return (
		<div
			className="image-preview__modal"
			onClick={handleCloseImagePreview}
		>
			<img
				className="image-preview__img"
				src={imageSource}
				alt="Full preview"
			/>
		</div>
	);
};

export default ImagePreviewModal;
