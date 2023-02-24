import React, { useEffect } from 'react'
import './email.css'
import emailjs from 'emailjs-com'
import plane from '../../assets/3d-plane1.png'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

const Email = () => {
    const [sent, setSent] = useState(false)
    const animatedPlane = useAnimation()

    useEffect(() => {
        if (sent) {
            animatedPlane.start({
                x: '100%',
                y: [-10, 0, -10],
                rotate: [0, 10, 0],
                opacity: 0,
                transition: {
                    duration: 1
                }
            })
        }

        if (!sent) {
            animatedPlane.start({
                y: [-10, 0, -10],
                rotate: [0, 10, 0],
                transition: {
                    duration: 3,
                    ease: "easeInOut",
                    yoyo: true,
                    repeat: Infinity,
                }
            })
        }
    }, [sent], [animatedPlane])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_91m6kfz', 'template_1dkknh6', e.target, '1Hn4T0-kg_zotZSBS')
            .then((result) => {
                console.log(result.text);
                setSent(true)
            }, (error) => {
                console.log(error.text);
                setSent(false)
            });

        e.target.reset()
    }

    return (
        <section className='calebq__email-main' id='email'>
            <h1 className='calebq__email-header'>Make The paper plane fly</h1>
            <p className='calebq__email-pararaph'>Shoot some messages or some questions my way!</p>

            <div className='calebq__email-container'>
                <form onSubmit={sendEmail} className='calebq__email-form'>
                    <div className='name-email'>
                        <div className='input-container'>
                            <input type="text" name='name' placeholder='Name' className='input' />
                            <span></span>
                        </div>

                        <div className='input-container'>
                            <input type="email" name='email' placeholder='Email' className='input' />
                            <span></span>
                        </div>
                    </div>

                    <div className='message-section'>
                        <textarea name="message" placeholder='Enter your Message' className='text-area' />
                        <span></span>
                    </div>

                    <button type='submit' className='calebq__email-button'>SEND</button>
                </form>

                <picture className='calebq__email-picture'>
                    <motion.img src={plane} alt='3d illustration' className='calebq__email-image' animate={animatedPlane} />
                </picture>
            </div>
        </section>
    )
}

export default Email