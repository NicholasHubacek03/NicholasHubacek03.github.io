import React from 'react';
import '../css/AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-container">
            <h1 className="about-me-heading">About Me</h1>
            <img src="src/pictures/profile.jpg" alt="Profile" className="profile-image" />
            <p className="about-me-text">
                Hi there! My name is [Your Name], and I'm a [Your Role] based in [Your Location]. 
                I have a passion for [Your Passion/Interest], and I love [Your Hobbies/Activities].
                With [Number of Years] of experience in [Your Field], I've had the opportunity to work on 
                [Notable Projects/Achievements]. In my free time, you can find me [Your Favorite Activities/Hobbies].
                I'm always eager to learn and explore new technologies, and I'm excited about the 
                possibilities of [Your Field/Future Goals]. Feel free to connect with me on [Your Social Media Platforms]!
            </p>
        </div>
    );
}

export default AboutMe;
