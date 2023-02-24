import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './work.css'
import filmbox from '../../assets/Filmbox-image.png'
import dictionary from '../../assets/dictionary-image.png'
import trivia from '../../assets/trivia-app-image.png'

const Work = () => {
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    const { ref, inView } = useInView({
        threshold: 0.4
    })

    const show = useAnimation()
    const show1 = useAnimation()

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

    useEffect(() => {
        if (inView) {
            show1.start({
                scaleY: 1,
                transition: {
                    ...transition
                }
            })
        }

        if (!inView) {
            show1.start({
                scaleY: 0.8,
                transition: {
                    ...transition
                }
            })
        }
    }, [inView])

    return (
        <section class="calebq__work-main" id='work'>
            <h1 className='calebq__work-header'><span>0.2</span>WORK</h1>
            <p className='calebq__work-paragraph'>Below are some of the projects I have handled in the past.</p>
            <div className='calebq__work-container' ref={ref}>
                <picture className='calebq__work-picture'>
                    <div className='calebq__work-article-contiainer' ref={ref}>
                        <motion.img src={filmbox} alt='calebq__work-image' className='calebq__work-image' animate={show} />
                        <img src={filmbox} alt='calebq__work-image' className='calebq__work-image1' />
                        <h1 className='calebq__work-title'>FILMBOX</h1>
                        <p className='calebq__work-details'>Filmbox is a web-based application that was created using React and vanilla CSS. The app utilizes the movieDB API to access a database of movies, series and their details, including Cast, reviews, ratings e.t.c.</p>
                        <a href='https://filmbox-box.netlify.app/' target='_blank'><button className='calebq__work-button'>LIVE SITE</button></a>
                    </div>

                    <div className='calebq__work-article-contiainer' ref={ref}>
                        <motion.img src={trivia} alt='calebq__work-image' className='calebq__work-image' animate={show} />
                        <img src={trivia} alt='calebq__work-image' className='calebq__work-image1' />
                        <h1 className='calebq__work-title'>TRIVQUEST</h1>
                        <p className='calebq__work-details'>Trivquest is a web-based game that was created using HTML, CSS, and JavaScript. The app utilizes a trivia API to access a database of questions and answers in various categories including history, general knowledge, science e.t.c.</p>
                        <a href='https://trivquest.netlify.app/' target='_blank'><button className='calebq__work-button'>LIVE SITE</button></a>
                    </div>

                    <div className='calebq__work-article-contiainer' ref={ref}>
                        <motion.img src={dictionary} alt='calebq__work-image' className='calebq__work-image' animate={show} />
                        <img src={dictionary} alt='calebq__work-image' className='calebq__work-image1' />
                        <h1 className='calebq__work-title'>DICTIONARY</h1>
                        <p className='calebq__work-details'>This project is a simple web based dictionary application that was built with React and vanilla CSS. The application utilizes a dictionary API to access a database of words and their meaning as well as their pronunciations.</p>
                        <a href='https://dictionary-rec-app.netlify.app/' target='_blank'><button className='calebq__work-button'>LIVE SITE</button></a>
                    </div>
                </picture>
            </div>
        </section>
    )
}

export default Work