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




// {
//     <div className='calebq__work-article-contiainer' ref={ref}>
//     <motion.img src={filmbox} alt='calebq__work-image' className='calebq__work-image' animate={show} />
//     <img src={filmbox} alt='calebq__work-image' className='calebq__work-image1' />
//     <h1 className='calebq__work-title'>FILMBOX</h1>
//     <p className='calebq__work-details'>Filmbox is a web-based application that was created using React and vanilla CSS. The app utilizes the movieDB API to access a database of movies, series and their details, including Cast, reviews, ratings e.t.c.</p>
//     <a href='https://filmbox-box.netlify.app/' target='_blank'><button className='calebq__work-button'>LIVE SITE</button></a>
// </div>

// <div className='calebq__work-article-contiainer' ref={ref}>
//     <motion.img src={trivia} alt='calebq__work-image' className='calebq__work-image' animate={show} />
//     <img src={trivia} alt='calebq__work-image' className='calebq__work-image1' />
//     <h1 className='calebq__work-title'>TRIVQUEST</h1>
//     <p className='calebq__work-details'>Trivquest is a web-based game that was created using HTML, CSS, and JavaScript. The app utilizes a trivia API to access a database of questions and answers in various categories including history, general knowledge, science e.t.c.</p>
//     <a href='https://trivquest.netlify.app/' target='_blank'><button className='calebq__work-button'>LIVE SITE</button></a>
// </div>

// <div className='calebq__work-article-contiainer' ref={ref}>
//     <motion.img src={dictionary} alt='calebq__work-image' className='calebq__work-image' animate={show} />
//     <img src={dictionary} alt='calebq__work-image' className='calebq__work-image1' />
//     <h1 className='calebq__work-title'>DICTIONARY</h1>
//     <p className='calebq__work-details'>This project is a simple web based dictionary application that was built with React and vanilla CSS. The application utilizes a dictionary API to access a database of words and their meaning as well as their pronunciations.</p>
//     <a href='https://dictionary-rec-app.netlify.app/' target='_blank'><button className='calebq__work-button'>LIVE SITE</button></a>
// </div>
