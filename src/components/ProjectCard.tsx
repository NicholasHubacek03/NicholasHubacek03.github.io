import React from 'react';

interface Project {
    title: string;
    description: string;
    button: JSX.Element;
    image: JSX.Element;
}

const ProjectCard: React.FC<Project> = ({ title, description, button, image }) => {
    return (
        <div className='project-card'>
            <h2>{title}</h2>
            <p>{description}</p>
            {image}
            {button}
        </div>
    );
};

export default ProjectCard;
