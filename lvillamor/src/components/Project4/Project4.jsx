import React from "react";
import "./Project4.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";
import project4mainPage from "../../assets/project4mainPage.png";
import project4registerModal from "../../assets/project4registerModal.png";
import project4tablet from "../../assets/project4tablet.png";
import project4mobile from "../../assets/project4mobile.png";

const Project4 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project4__content">
				<div className="project4__description  viewer__section-description">
					This a project demonstration created during my time with Tripleten
					bootcamp. It consists of the following features: Javascript, React,
					redux, api fetch, local and third party api. Predeployment will
					display hardcoded API information to demonstrate successful API
					backend response simulation. API Source: https://newsapi.org/ Redux -
					use for state specific design for current page identifier and API data
					object organization for save and delete card function Authorization
					and authentication HTML and CSS - in collaboration with Redux,
					demonstrates the use of state specific js design allowing a contrast
					between light and dark theme for two separate pages with similarly
					displayed components. Implementation of a third-party API with
					asynchronous fetch requests - this data will be viewed into organized
					news cards, which will give the user option to save selected news
					cards from an array of articles in a separate react component that is
					on the user's separate profile page. Options to delete cards will also
					be available to user. Search-query-specific Api - Interaction with
					online NewsAPI will provide live article viewing. The following
					information as per search will be included in each newscard: article
					title, published date, article description, source, and image url.
					Responsive design - use of media queries for adaptive screen design
					for atleast 3 screen orientations(computer, tablet and mobile). Menu
					options converted from header buttons to hamburger menu.
				</div>
				<div className="project4__image-container project__image-container">
					<img
						src={project4mainPage}
						alt=""
						className="project4__image-desktop project4__image"
					/>
					<img
						src={project4registerModal}
						alt=""
						className="project4__image__register project4__image"
					/>
					<img
						src={project4tablet}
						alt=""
						className="project__image-tablet project4__image"
					/>
					<img
						src={project4mobile}
						alt=""
						className="project4__mobile project4__image"
					/>
				</div>
				<div className="project4__footer project__footer">
					Site is live on github pages at:
					https://luckygith.github.io/project_newsexplorer_frontend/{" "}
				</div>
			</div>
		</MenuModal>
	);
};

export default Project4;
