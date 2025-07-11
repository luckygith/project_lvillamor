import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Viewer from "../Viewer/Viewer";
import ImagePreviewModal from "../ImagePreviewModal/ImagePreviewModal";

function App() {
	const [activeModal, setActiveModal] = useState("");
	// const [activePreviewModal, setActivePreviewModal] = useState("");
	const [imagePreviewSource, setImagePreviewSource] = useState("");

	// const openModal = (modalName) => {
	// 	if (activeModal) {
	// 		setPreviousModal(activeModal); // store the one that’s open
	// 		setTimeout(() => {
	// 			setPreviousModal(""); // clear it after fade-out
	// 		}, 300); // match fade-out duration
	// 	}
	// 	setActiveModal(modalName); // open new one immediately
	// };

	const handleImagePreview = (imageSource) => {
		console.log("handleImagePreview", imageSource);
		setImagePreviewSource(imageSource);
		setActiveModal("image-preview");
		// setActivePreviewModal("image-preview");
	};

	const handleCloseImagePreview = () => {
		console.log("handlecloseimagepreview from APP");
		setActiveModal("");
	};

	const handleCloseModal = () => {
		setActiveModal("");
	};

	const handleAbout = () => {
		setActiveModal("about");
		console.log("about");
	};

	const handleResume = () => {
		setActiveModal("resume");
		console.log("resume");
	};

	const handleProject1 = () => {
		setActiveModal("project1");
		console.log("project1");
	};

	const handleProject2 = () => {
		setActiveModal("project2");
		console.log("project2");
	};

	const handleProject3 = () => {
		setActiveModal("project3");
		console.log("project3");
	};

	const handleProject4 = () => {
		setActiveModal("project4");
		console.log("project4");
	};

	return (
		<div className="page">
			<div className="page__content">
				<Main
					handleAbout={handleAbout}
					handleResume={handleResume}
					handleProject1={handleProject1}
					handleProject2={handleProject2}
					handleProject3={handleProject3}
					handleProject4={handleProject4}
				/>
				<Viewer
					activeModal={activeModal}
					handleCloseModal={handleCloseModal}
					handleImagePreview={handleImagePreview}
					imagePreviewSource={imagePreviewSource}
					handleCloseImagePreview={handleCloseImagePreview}
				/>
			</div>
			{activeModal === "image-preview" && (
				<ImagePreviewModal
					isOpen={true}
					handleCloseImagePreview={handleCloseImagePreview}
					imageSource={imagePreviewSource}
				/>
			)}
		</div>
	);
}

export default App;
