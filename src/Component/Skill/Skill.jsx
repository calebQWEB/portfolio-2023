import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skill.css'

const Skill = ({color, BorderColor, skill}) => {
    const show = useAnimation()
    const { ref, inView } = useInView({
        threshold: 0.4
    })

    const transition = {delay: 0.2, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

    useEffect(() => {
        if (inView) {
            show.start({
                rotate: -20,
                y: 0,
                opacity: 1,
                transition: {
                    ...transition
                }
            })
        }

        if (!inView) {
            show.start({
                y: 130,
                opacity: 0,
                rotate: 0,
                transition: {
                    ...transition
                }
            })
        }
    }, [inView])

    const Style = {
        border: '4px solid',
        borderColor: BorderColor,
        backgroundColor: color
    }
  return (
    <div ref={ref}>
        <motion.div className='skills-main' style={Style} animate={show}>
            <h1>{skill}</h1>
        </motion.div>
    </div>

  )
}

export default Skill