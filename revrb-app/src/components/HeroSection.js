import React from 'react';
import '../App.css';
import './HeroSection.css';
import Button from './Button';


const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=172&oauth2_token_id=57447761" autoPlay loop muted></video>
            <h1>Music to make you go BOOM</h1>
            <p>Join the club now</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large" path="/register">JOIN NOW</Button>
                <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--large" path="/podcast">Listen to podcast</Button>
            </div>
        </div>
    )
}

export default HeroSection
