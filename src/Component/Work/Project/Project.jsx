import React from "react";
import "./project.css";

const Project = ({ projectTitle, description, link }) => {
    return (
        <div className="project-container">
            <div className="project-card">
                <h1 className="project-title">{projectTitle}</h1>
            </div>

            <div className="card-back">
                <p className="project-description">{description}</p>
                <a href={link} target='_blank'><button className='project-link'>SITE</button></a>
            </div>
        </div>

    );
};

export default Project;