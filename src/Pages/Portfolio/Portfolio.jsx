import React from 'react'
import './Portfolio.css'
import Project from '../../Component/Work/Project/Project'
import VideoPlayer from '../../Component/VideoPlayer/VideoPlayer'

const Portfolio = () => {
  const projectDescription = ['Dive into the world of professional networking with our meticulously crafted LinkedIn website clone. Leveraging cutting-edge technologies including React for dynamic user interfaces, Tailwind CSS for sleek and responsive design, and Redux for efficient state management, this clone mirrors some of the functionality and elegance of the original.', 'Welcome to Willco, your premier destination for construction solutions. Our website offers more than just information – it"s a comprehensive hub for seamless communication and support. Engage in personalized conversations with our dedicated customer service representatives through our intuitive chat system. Need quick assistance? Our customer service chatbot is at your service, ready to assist with tasks and queries right within the website. At Willco, we"re not just building structures, we"re building relationships – one chat at a time.']

  return (
    <main className='calebq__portfolio'>
      <h1>My PortFolio</h1>

      <div className='calebq__project-main'>
        <Project image='https://res.cloudinary.com/dmdg0lwhz/image/upload/v1714558182/Willco-landing-page_ajxa0y.png' name='Willco Construction Company' link='https://willco-site.netlify.app/' details={projectDescription[1]}/>

        <Project image='https://res.cloudinary.com/dmdg0lwhz/image/upload/v1714558278/LinkedIn-photo_ojjwoq.png' name='LinkedIn Clone' link='https://linkedin-home.vercel.app/' details={projectDescription[0]}/>

        <VideoPlayer />
      </div>
    </main>
  )
}

export default Portfolio