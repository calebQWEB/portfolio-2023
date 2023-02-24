import React from 'react'
import './home.css'
import Header from '../../Component/Header/Header'
import About from '../../Component/About/About'
import Work from '../../Component/Work/Work'
import Email from '../../Component/Email/Email'
import Footer from '../../Component/Footer/Footer'

const Home = () => {
    return (
        <div className='calebq'>
            <Header />
            <main className='calebq__main'>
                <About />
                <Work />
                <Email />
                <Footer />
            </main>
        </div>
    )
}

export default Home