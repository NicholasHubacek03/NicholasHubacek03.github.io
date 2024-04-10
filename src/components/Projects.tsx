import React from 'react';
import ProjectCard from './ProjectCard';
import '../css/Projects.css';
import DailyDripImg from '../../public/pictures/projects/The Daily Drip!.jpg'
import WeatherProjectImg from '../../public/pictures/projects//Weather-project.jpg'
import TrakFlixImg from '../../public/pictures/projects/Trakflix.jpg'
import CommuniListImg from '../../public/pictures/projects/CommuniList.jpg'
import BrewQuestImg from '../../public/pictures/projects/BrewQuest.jpg'
import ComingSoonImg from '../../public/pictures/projects/coming soon.jpg'

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'BrewQuest',
            description: "Allowing users to explore breweries, share reviews, participate as drivers, and earn badges. This engaging platform combines a passion for breweries with a rewarding user experience.",
            button: <a href='https://github.com/BrewQuest/BrewQuest'>Repo</a>,
            image: <img src={BrewQuestImg} alt="BrewQuest"></img>
        },
        {
            title: 'Weather Monitor',
            description: "An application to track the 5-day forecast for any city in the world, providing comprehensive weather information.",
            button: <a href='https://github.com/NicholasHubacek03/codeup-web-exercises/blob/main/weather_map.html'>Repo</a>,
            image: <img src={WeatherProjectImg} alt="Weather Monitor"></img>
        },
        {
            title: 'TrakFlix',
            description: 'Trakflix is a movie application that operates on a single page, providing interactive features and complete CRUD functionality (Create, Read, Update, and Delete) to manage data within a locally stored JSON database using FETCH requests.',
            button: <a href='https://github.com/francis-hubacek-movies-app/TrakFlix'>Repo</a>,
            image: <img src={TrakFlixImg} alt="Trakflix"></img>
        },
        {
            title: 'The Daily Drip',
            description: 'An application that allows an user to search through different coffee and let them add their owns too',
            button: <a href='https://github.com/Hubacek-and-Usher-coffee-project/coffee-project'>Repo</a>,
            image: <img src={DailyDripImg} alt="The Daily Drip"></img>
        },
        {
            title: 'CommuniList',
            description: 'An application offers users a seamless experience, allowing them to register an account, log out, and efficiently modify their account details. Additionally, enabling users to effortlessly add, edit, or delete ads to their page.',
            button: <a href='https://github.com/autrey-hubacek-gutierrez-adlister/a-n-m-adlister'>Repo</a>,
            image: <img src={CommuniListImg} alt="CommuniList"></img>

        },
        {
            title: 'SwiftList',
            description: ' Your all-in-one calendar companion, offering seamless integration with Google API for daily, weekly, and monthly tracking, to-dos, and much more.',
            button: <a href='https://github.com/NicholasHubacek03/SwiftList_web'>Repo</a>,
            image: <img src={ComingSoonImg} alt="Coming Soon"></img>

        }
    ];
    return (
        <div >
            <br />
            <h1>Projects</h1>
            <section className='projects-container'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </section>
        </div>
    );
};

export default Projects;