import React from "react";
import "./Project2.css";
import MenuModal from "../MenuModal/MenuModal";
import project2mainPage from "../../assets/project2mainPage.png";
import project2fullPage from "../../assets/project2fullPage.png";

const Project2 = ({ handleImagePreview }) => {
	const handleImageClick = (imageToPreview) => {
		handleImagePreview(imageToPreview);
	};

	return (
		<MenuModal>
			<div className="project2__content project__content">
				<div className="project2__description project__description viewer__section-description">
					<h1 className="project__title">Coffee Shop Online Menu</h1>
					<a
						className="project__link"
						href="https://github.com/luckygith/se_project_coffeeshop.git"
					>
						Site on Github
					</a>
					<p>
						A coffee shop menu created for online presence for customers to view
						menu. With basic vanilla javascript I included simple features with
						the following: Semantic HTML5 - Flexbox - Positioning - Flat BEM
						file structure - A custom form - CSS animation and transform. The is
						continuous single page scrolling website that is also responsive to
						fit all kinds of screens from desktop to mobile.
					</p>
				</div>

				<div className="project2__image-container project__image-container">
					<img
						src={project2mainPage}
						alt=""
						className="project2__image-main project2__image"
						onClick={() => handleImageClick(project2mainPage)}
					/>
					<img
						src={project2fullPage}
						alt=""
						className="project2__image__full project2__image"
						onClick={() => handleImageClick(project2fullPage)}
					/>
				</div>
			</div>
		</MenuModal>
	);
};

export default Project2;
