import React from 'react';
import ProjectCard from './ProjectCard';
import '../css/Projects.css';

const Projects: React.FC = () => {
    const projects = [
        { 
            title: 'BrewQuest', 
            description: "Allowing users to explore breweries, share reviews, participate as drivers, and earn badges. This engaging platform combines a passion for breweries with a rewarding user experience.", 
            button: <a href='https://github.com/BrewQuest/BrewQuest'>Repo</a>,
            image: <img src="src/pictures/BrewQuest.jpg" alt="BrewQuest"></img>
        },
        { 
            title: 'Weather Monitor', 
            description: "An application to track the 5-day forecast for any city in the world, providing comprehensive weather information.",
            button: <a href='https://github.com/NicholasHubacek03/codeup-web-exercises/blob/main/weather_map.html'>Repo</a>,
            image: <img src="src/pictures/Weather-project.jpg" alt="Weather Monitor"></img>
        },
        { 
            title: 'TrakFlix', 
            description: 'Trakflix is a movie application that operates on a single page, providing interactive features and complete CRUD functionality (Create, Read, Update, and Delete) to manage data within a locally stored JSON database using FETCH requests.',
            button: <a href='https://github.com/francis-hubacek-movies-app/TrakFlix'>Repo</a>,
            image: <img src="src/pictures/Trakflix.jpg" alt="Trakflix"></img>
        },
        { 
            title: 'The Daily Drip', 
            description: 'An application that allows an user to search through different coffee and let them add their owns too',
            button: <a href='https://github.com/Hubacek-and-Usher-coffee-project/coffee-project'>Repo</a>,
            image: <img src="src/pictures/The Daily Drip!.jpg" alt="The Daily Drip"></img>
        },
        { 
            title: 'CommuniList', 
            description: 'An application offers users a seamless experience, allowing them to register an account, log out, and efficiently modify their account details. Additionally, enabling users to effortlessly add, edit, or delete ads to their page.',
            button: <a href='https://github.com/autrey-hubacek-gutierrez-adlister/a-n-m-adlister'>Repo</a>,
            image: <img src="src/pictures/CommuniList.jpg" alt="CommuniList"></img>
            
        },
        { 
            title: 'SwiftList', 
            description: '',
            button: <a href='https://github.com/NicholasHubacek03/SwiftList_web'>Repo</a>,
            image: <img src="" alt="Coming Soon"></img>
            
        }
    ];
    return (
        <div>
            <br />
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            <br />
            <br />
        </div>
    );
};

export default Projects;
