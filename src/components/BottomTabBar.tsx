import React from 'react';
import '../css/BottomTabBar.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomTabBar: React.FC = () => {
    return (
        <div className="bottom-tab-bar">
            <a href="https://github.com/NicholasHubacek03"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/nicholas-hubacek/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    );
};

export default BottomTabBar;

