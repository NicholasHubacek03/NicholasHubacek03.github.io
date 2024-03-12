import React from 'react';

const Contact: React.FC = () => {
    return (
        <>
            <h1>Thanks for looking at my Portfolio</h1>
            <p>Let's Talk!</p>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="email">Your Email Address</label>
                <input type="text" id="email" />

                <label htmlFor="message">Message</label>
                <input type="text" id="message" />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Contact;