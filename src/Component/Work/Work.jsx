import React from 'react'
import './work.css'
import Project from './Project/Project'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <section className="calebq__work-main" id='work'>
            <h1 className='calebq__work-header'><span>0.2</span>PORTFOLIO</h1>
            <p className='calebq__work-paragraph'>Below are some of the projects I have handled in the past.</p>
            <div className='calebq__work-container'>
                <VideoPlayer />

                <div className="calebq__work-sub-container">
                    <div className='brand-identity'>
                        <MdOutlineBrandingWatermark size={40} />
                        <h2>Brand Identity</h2>
                        <span>Pixels to Perfection</span>
                    </div>

                    <Link to='/portfolio'>
                        <div className='project-folder'>
                            <FaFolder size={40} color='#000000'/>
                            <h2>Project Folder</h2>
                            <span>view more</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Work