import React from "react";
import "./Project1.css";
import MenuModal from "../MenuModal/MenuModal";
import useModalClose from "../../hooks/modal";

const Project1 = ({ isOpen, onClose, handleCloseModal }) => {
	useModalClose(isOpen, onClose, handleCloseModal);
	return (
		<MenuModal>
			<div className="project1
            __content">
				<div className="project1__description project__description viewer__section-description">
					My first project demonstration of api fetch request with a simple
					frontend layout with cards that open up as a modal view.
				</div>
				<div className="project1
                __image-container project__image-container">
					<img
						src={}
						alt=""
						className="project1
                        __image-desktop project1
                        __image"
					/>
					<img
						src=""
						alt=""
						className="project1
                        __image__register project1
                        __image"
					/>
					<img
						src=""
						alt=""
						className="project__image-tablet project1
                        __image"
					/>
					<img
						src=""
						alt=""
						className="project1
                        __mobile project1
                        __image"
					/>
				</div>
			</div>
		</MenuModal>
	);
};

export default Project1;
