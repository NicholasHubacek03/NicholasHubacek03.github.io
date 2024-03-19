import React from 'react';

const Contact: React.FC = () => {
    return (
        <>
            <h2>Thanks for coming by!</h2>
            <p>Let's Talk!</p>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="email">Your Email Address</label>
                <input type="email" id="email" />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" />

                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4}></textarea>

                <button type="submit">Submit</button>
            </form>
            <p>Connect with me on social media:</p>
            <ul>
                <li><a href="https://linkedin.com">LinkedIn</a></li>
                <li><a href="https://twitter.com">GitHub</a></li>
            </ul>
        </>
    );
}

export default Contact;
