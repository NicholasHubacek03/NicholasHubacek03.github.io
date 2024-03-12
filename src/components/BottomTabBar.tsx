import React from 'react';
import '../css/BottomTabBar.css';

const BottomTabBar: React.FC = () => {
    return (
        <div className="bottom-tab-bar">
            <a href="https://github.com/NicholasHubacek03">GitHub</a>
            <a href="https://www.linkedin.com/in/nicholas-hubacek/">LinkedIn</a>
        </div>
    );
};

export default BottomTabBar;