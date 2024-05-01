import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'
import './about.css'
import Skill from '../Skill/Skill'

const About = () => {
    const skillColor = ['#8C3D6F', '#6F8C3D', '#3D6F8C', '#8C6F3D', '#096944', '#6F3D8C']
    const borderColor = ['#A65283', '#8FB354', '#5093B2', '#A68652', '#61c29d', '#8F5AB3']

    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    const { ref, inView } = useInView({
        threshold: 0.4
    })

    const show = useAnimation()

    useEffect(() => {
        if (inView) {
            show.start({
                scaleY: 1,
                transition: {
                    ...transition
                }
            })
        }

        if (!inView) {
            show.start({
                scaleY: 0.8,
                transition: {
                    ...transition
                }
            })
        }
    }, [inView])

    return (
        <section className='calebq__about-main' id='about'>
            <h1 className='calebq__about-header'><span>0.1 </span>ABOUT</h1>
            <div className='calebq__about-container'>
                <div className='skills-container'>
                    <Skill color={skillColor[0]} BorderColor={borderColor[0]} skill='JAVASCRIPT'/>
                    <Skill color={skillColor[1]} BorderColor={borderColor[1]} skill='REACT'/>
                    <Skill color={skillColor[2]} BorderColor={borderColor[2]} skill='TAILWIND'/>
                    <Skill color={skillColor[3]} BorderColor={borderColor[3]} skill='FIREBASE'/>
                    <Skill color={skillColor[4]} BorderColor={borderColor[4]} skill='VOICEFLOW'/>
                    <Skill color={skillColor[5]} BorderColor={borderColor[5]} skill='HTML'/>
                    <Skill color={skillColor[6]} BorderColor={borderColor[6]} skill='CSS'/>
                </div>
                <article className='calebq__article'>
                    <p className='calebq__about-paragraph'>
                    Hello, I'm Caleb, a Frontend Developer with a knack for crafting engaging and user-friendly web applications and websites for the past 3 years.
                    </p>

                    <p> My toolkit includes a robust set of skills encompassing CSS, JavaScript, React, Tailwind, Git, Figma, and an array of frontend tools. With this arsenal, I breathe life into digital experiences, ensuring they resonate with users. I take pride in my ability to produce clean, efficient, and well-documented code, consistently exceeding client expectations.</p>

                    <p>In addition to my frontend prowess, I've also dabbled in chatbot development using Voiceflow, adding another dimension to my skill set. Whether it's crafting seamless user experiences or exploring cutting-edge technologies, I'm passionate about pushing the boundaries of what's possible in web development.</p>

                    <div className='calebq__about-button-container'>
                        <Link to="email" spy={true} smooth={true} offset={-80} duration={500}><button className='calebq__about-button'>Contact me</button></Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About