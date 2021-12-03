import React from 'react'
import './landingPage.scss'
import image6 from '../../images/image6.jpg'
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <header className="images">
            <img src={image6} alt="person working" className="homepage-image" />
            <div className="header-text">
                <p>You can work anywhere</p>
                <p className="text-margin">You can also workout anywhere</p>
                <Link to="/dashboard" className='button'>Get Started</Link>
            </div>
        </header>
    )
}

export default Homepage
