import React from "react";
import "./Project1.css";
import MenuModal from "../MenuModal/MenuModal";
import project1main from "../../assets/project1main.png";
import project1formModals from "../../assets/project1formModals.png";
import project1features from "../../assets/project1features.png";
import project1confirmUpdate from "../../assets/project1confirmUpdate.png";
import project1cardPreviewModal from "../../assets/project1cardPreviewModal.png";
import projec1mobile from "../../assets/projec1mobile.png";

const Project1 = ({ handleImagePreview }) => {
	const handleImageClick = (imageToPreview) => {
		handleImagePreview(imageToPreview);
	};

	return (
		<>
			<MenuModal>
				<div className="project1__content project__content">
					<div className="project1__description project__description viewer__section-description">
						<h1 className="project__title">Around the U.S.</h1>
						<a
							href="https://github.com/luckygith/se_project_aroundtheus.git"
							className="project__link"
						>
							Around the US Github
						</a>
						<p>
							My first project demonstration of api fetch request with a simple
							frontend layout with cards that open up as a modal view.
						</p>
					</div>
					<div className="project1__image-container project__image-container">
						<img
							src={project1main}
							alt="main page"
							className="project1__image-main project1__image"
							onClick={() => handleImageClick(project1main)}
						/>
						<img
							src={project1cardPreviewModal}
							alt="card preview modal"
							className="project1__image-preview project1__image"
							onClick={() => handleImageClick(project1cardPreviewModal)}
						/>
						<img
							src={project1formModals}
							alt="form modals"
							className="project1__forms project1__image"
							onClick={() => handleImageClick(project1formModals)}
						/>
						<img
							src={project1confirmUpdate}
							alt="confirm and update modals"
							className="project__image-confirm-update project1__image"
							onClick={() => handleImageClick(project1confirmUpdate)}
						/>
						<img
							src={projec1mobile}
							alt="mobile view"
							className="project1__mobile project1__image"
							onClick={() => handleImageClick(projec1mobile)}
						/>
						<img
							src={project1features}
							alt="application features"
							className="project1__features project1__image"
							onClick={() => handleImageClick(project1features)}
						/>
					</div>
				</div>
			</MenuModal>
		</>
	);
};

export default Project1;
