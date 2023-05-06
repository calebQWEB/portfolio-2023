import React, { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './work.css'
import Project from './Project/Project'

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
                <div className='calebq__work-picture'>
                    <Project projectTitle='Filmbox' 
                            description='Filmbox is a web-based application that was created using React and vanilla CSS. The app utilizes the movieDB API to access a database of movies, series and their details, including Cast, reviews, ratings e.t.c.'
                            link='https://filmbox-box.netlify.app/'/>
                    <Project projectTitle='Trivquest' 
                            description='Trivquest is a web-based game that was created using HTML, CSS, and JavaScript. The app utilizes a trivia API to access a database of questions and answers in various categories including history, general knowledge, science e.t.c.'
                            link='https://trivquest.netlify.app/'/>
                    <Project projectTitle='Linkedin Clone' 
                            description='LinkedIn clone is a web application that mimics some of the functionality and user interface of LinkedIn, and was created with React and tailwind as well as libraries like the redux toolkit and faker js.'
                            link='https://web-calebq.vercel.app/'/>
                </div>
            </div>
        </section>
    )
}

export default Work