import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'
import skills from '../../assets/skills-image.png'
import './about.css'

const About = () => {
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
            <div className='calebq__about-container' ref={ref}>
                <picture className='calebq__picture'>
                    <motion.img src={skills} alt='3d illustration' className='calebq__about-image' animate={show} />
                </picture>
                <article className='calebq__article'>
                    <p className='calebq__about-paragraph'>
                        Hi, My Name is Caleb, I am a Frontend Developer from Nigeria and I have been creating engaging and user-freindly web applications and websites over the past 2 years.
                    </p>

                    <p> With a strong background in CSS, JavaScript, React, Tailwind, Bootstrap, Git, Figma and a variety of frontend tools, I have the skills and expertise to bring websites and applications to life. My expertise in creating clean, efficient, and well-documented code has allowed me to successfully deliver projects for clients, consistently meeting and exceeding their expectations.</p>

                    <p>As a passionate Frontend Developer I enjoy the creativity and problem-solving involved in building intuitive user interfaces. In my free time, I enjoy exploring new technologies and experimenting with different design patterns.</p>

                    <div className='calebq__about-button-container'>
                        <Link to="email" spy={true} smooth={true} offset={-80} duration={500}><button className='calebq__about-button'>Contact me</button></Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About