import React from "react";
import useModalClose from "../../hooks/modal";
import "./Viewer.css";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Project1 from "../Project1/Project1";
import Project2 from "../Project2/Project2";
import Project3 from "../Project3/Project3";
import Project4 from "../Project4/Project4";
import ImagePreviewModal from "../ImagePreviewModal/ImagePreviewModal";

function Viewer({
	activeModal,
	handleCloseModal,
	handleImagePreview,
	imagePreviewSource,
	previewActiveModal,
	handleCloseImagePreview,
}) {
	useModalClose(activeModal, handleCloseModal);

	return (
		<div className="viewer">
			{activeModal === "about" && (
				<About
					isOpen={activeModal === "about"}
					onClose={handleCloseModal}
					handleImagePreview={handleImagePreview}
				/>
			)}
			{activeModal === "resume" && (
				<Resume
					isOpen={activeModal === "resume"}
					onClose={handleCloseModal}
				/>
			)}
			{activeModal === "project1" && (
				<Project1
					isOpen={activeModal === "project1"}
					handleCloseModal={handleCloseModal}
					handleImagePreview={handleImagePreview}
					activeModal={activeModal}
					imagePreviewSource={imagePreviewSource}
					previewActiveModal={previewActiveModal}
					handleCloseImagePreview={handleCloseImagePreview}
				/>
			)}
			{activeModal === "project2" && (
				<Project2
					isOpen={activeModal === "project2"}
					// onClose={handleCloseModal}
					handleImagePreview={handleImagePreview}
					activeModal={activeModal}
					imagePreviewSource={imagePreviewSource}
					// previewActiveModal={previewActiveModal}
				/>
			)}
			{activeModal === "project3" && (
				<Project3
					isOpen={activeModal === "project3"}
					onClose={handleCloseModal}
					handleImagePreview={handleImagePreview}
					activeModal={activeModal}
					imagePreviewSource={imagePreviewSource}
					// previewActiveModal={previewActiveModal}
				/>
			)}
			{activeModal === "project4" && (
				<Project4
					isOpen={activeModal === "project4"}
					onClose={handleCloseModal}
					handleImagePreview={handleImagePreview}
					activeModal={activeModal}
					imagePreviewSource={imagePreviewSource}
					// previewActiveModal={previewActiveModal}
				/>
			)}
		</div>
	);
}

export default Viewer;
