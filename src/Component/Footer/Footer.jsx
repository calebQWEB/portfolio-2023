import React from 'react'
import './footer.css'
import logo from '../../assets/innerlogo.png'
import {BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className='calebq__footer-main'>
                <div className='calebq__footer-container'>
                    <img src={logo} alt='Logo' className='calebq__footer-image' />
                    <h1 className='calebq__footer-header'>Caleb</h1>
                </div>
                <div className='calebq__footer-media'>                    
                    <a href="https://twitter.com/Calebb_js" target='_blank'><BsTwitter className='calebq__footer-link'/></a>
                    <a href="https://www.linkedin.com/in/caleb-ochai-68033a234/" target='_blank'><BsLinkedin className='calebq__footer-link'/></a>
                    <a href="https://github.com/calebQWEB" target='_blank'><BsGithub className='calebq__footer-link'/></a>
                </div>
                <span>calebochai09@gmail.com</span>
            </div>
        </footer>
    )
}

export default Footer