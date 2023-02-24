import React from 'react'
import './footer.css'
import logo from '../../assets/innerlogo.png'
import twitter from '../../assets/twitter-icon.svg'
import linkedin from '../../assets/linkedin-icon.svg'
import github from '../../assets/github-icon.svg'

const Footer = () => {
    return (
        <footer>
            <div className='calebq__footer-main'>
                <div className='calebq__footer-container'>
                    <img src={logo} alt='Logo' className='calebq__footer-image' />
                    <h1 className='calebq__footer-header'>Caleb</h1>
                </div>
                <picture className='calebq__footer-media'>
                    <a href='https://twitter.com/Calebb_js' target='_blank'><img src={twitter} alt='Twitter icon' className='calebq__footer-link' /></a>
                    <a href='https://www.linkedin.com/in/caleb-ochai-68033a234/' target='_blank'><img src={linkedin} alt='Linkedin icon' className='calebq__footer-link' /></a>
                    <a href='https://github.com/calebQWEB' target='_blank'><img src={github} alt='Github icon' className='calebq__footer-link' /></a>
                </picture>
                <span>calebochai09@gmail.com</span>
            </div>
        </footer>
    )
}

export default Footer