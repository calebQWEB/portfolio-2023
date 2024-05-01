import React from "react";
import "./project.css";

const Project = ({image, name, link, details}) => {
    return (
        <div className="project-container">
            <div className="project-sub-container">
                <img src={image} alt={name}  className="project-image"/>

                <div>
                    <h2>{name}</h2>
                    <p>{details}</p>
                    <a href={link} target="_blank">View Project</a>
                </div>
            </div>
        </div>

    );
};

export default Project;