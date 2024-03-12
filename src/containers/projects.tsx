import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        { 
            title: 'BrewQuest', 
            description: "Allowing users to explore breweries, share reviews, participate as drivers, and earn badges. This engaging platform combines a passion for breweries with a rewarding user experience.", 
            button: <a href='https://github.com/BrewQuest/BrewQuest'>Repo</a>
        },
        { 
            title: 'Weather Monitor', 
            description: "An application to track the 5-day forecast for any city in the world, providing comprehensive weather information.",
            button: <a href='https://github.com/BrewQuest/BrewQuest'>Repo</a>
        },
        { 
            title: 'TrakFlix', 
            description: 'Description for Project 3',
            button: <a href='https://github.com/BrewQuest/BrewQuest'>Repo</a>
        },
        { 
            title: 'The Daily Drip', 
            description: 'Description for Project 3',
            button: <a href='https://github.com/BrewQuest/BrewQuest'>Repo</a>
        },
        { 
            title: 'CommuniList', 
            description: 'Description for Project 3',
            button: <a href='https://github.com/autrey-hubacek-gutierrez-adlister/a-n-m-adlister'>Repo</a>
        }
    ];

    return (
        <div>
            <h1>This is my Projects!</h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    {project.button}
                </div>
            ))}
        </div>
    );
};

export default Projects;