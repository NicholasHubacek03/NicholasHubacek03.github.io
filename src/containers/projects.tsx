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
            button: <a href='https://github.com/NicholasHubacek03/codeup-web-exercises/blob/main/weather_map.html'>Repo</a>
        },
        { 
            title: 'TrakFlix', 
            description: 'Trakflix is a movie application that operates on a single page, providing interactive features and complete CRUD functionality (Create, Read, Update, and Delete) to manage data within a locally stored JSON database using FETCH requests.',
            button: <a href='https://github.com/francis-hubacek-movies-app/TrakFlix'>Repo</a>
        },
        { 
            title: 'The Daily Drip', 
            description: '',
            button: <a href='https://github.com/Hubacek-and-Usher-coffee-project/coffee-project'>Repo</a>
        },
        { 
            title: 'CommuniList', 
            description: '',
            button: <a href='https://github.com/autrey-hubacek-gutierrez-adlister/a-n-m-adlister'>Repo</a>
            
        }
    ];
// Need video of projects
    return (
        <div>
            <h1>Projects</h1>
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