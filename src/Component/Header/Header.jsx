import React from 'react'
import './header.css'
import intro from '../../assets/3d-software.png'
import { motion } from 'framer-motion'

const Header = () => {

    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

    const variants = {
        initial: {
            width: '100vw',
            backgroundColor: '#000000'
        },

        animate: {
            width: 0,
            transition: {
                type: 'tween',
                delay: 0.3,
                duration: 0.8, ...transition
            }
        }
    }

    return (
        <header className='calebq__intro' id='home'>
            <motion.div variants={variants} initial='initial' animate='animate' className='calebq__intro-animate'></motion.div>

            <motion.div
                initial={{
                    width: '100vw',
                    backgroundColor: '#3D8CA8'
                }}
                animate={{
                    width: 0,
                    transition: {
                        type: 'tween',
                        duration: 0.8, ...transition
                    }
                }}
                className='calebq__intro-animate'>
            </motion.div>

            <motion.div className='calebq__intro-container'>
                <article>
                    <h1 className='calebq__intro-header'>LET'S TALK<br />DEVELOPMENT</h1>
                    <p className='calebq__intro-paragraph'>As a frontend developer, my focus is on creating clean, intuitive user interfaces that engage and delight users. From responsive layouts to interactive animations</p>
                </article>
                <picture>
                    <img src={intro} className='calebq__intro-pic' alt='3d Illustration' />
                </picture>
            </motion.div>
        </header>
    )
}

export default Header