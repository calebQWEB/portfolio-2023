import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import logo from '../../assets/innerlogo.png'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [nav, setNav] = useState(false)
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }

    const scrollFunc = () => {
        if (window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
            setNav(false)
        }
    }


    const navClick = () => {
        setNav(prevState => !prevState)
    }

    window.addEventListener('scroll', scrollFunc)

    return (
        <nav className='calebq__nav'>
            <div className='calebq__nav-container'>
                <div className='calebq__logo-container'>
                    <NavLink to="/"><motion.img src={logo} alt='Logo' className='calebq__logo' animate={scroll ? { x: -35, transition: { ...transition } } : { x: 0, transition: { ...transition } }} /></NavLink>
                    <NavLink to="/"><img src={logo} alt='Logo' className='calebq__mobile-logo' /></NavLink>
                    {!scroll && (
                        <h1 className='calebq__nav-header'>Caleb</h1>
                    )}
                </div>
                {!scroll && (
                    <ul className='calebq__nav-links'>
                        <li><Link to="about" spy={true} smooth={true} offset={-80} duration={500}>About</Link></li>
                        <li><Link to="work" spy={true} smooth={true} offset={-80} duration={500}>Portfolio</Link></li>
                        <li><Link to="email" spy={true} smooth={true} offset={-80} duration={500}>Email</Link></li>
                    </ul>
                )}

                {scroll && (
                    <div className='hamburger' onClick={navClick}>
                        <span></span>
                        <span></span>
                    </div>
                )}

                {nav && (
                    <div className='hidden-nav swing-in-top-fwd'>
                        <ul className='hidden-links'>
                            <li><Link to="about" spy={true} smooth={true} offset={-80} duration={500}>About</Link></li>
                            <li><Link to="work" spy={true} smooth={true} offset={-80} duration={500}>Portfolio</Link></li>
                            <li><Link to="email" spy={true} smooth={true} offset={-80} duration={500}>Email</Link></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar