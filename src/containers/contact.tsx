import React from 'react';
import '../css/Contact.css';

const Contact: React.FC = () => {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" />
            <br />
            <br />
            <div className="contact-container">
                <h2 className="contact-heading">Thanks for coming by!</h2>
                <p className="contact-intro">Let's Talk!</p>
                <form className="contact-form" action="https://formspree.io/f/xkndqoan" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email Address</label>
                        <input type="email" id="email" name="email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={4} className="form-control"></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <p className="social-media-heading">Connect with me on social media:</p>
                <ul className="social-media-list">
                    <li><a href="https://linkedin.com" className="social-media-link">LinkedIn</a></li>
                    <li><a href="https://github.com" className="social-media-link">GitHub</a></li>
                </ul>
            </div>
        </>
    );
}

export default Contact;
