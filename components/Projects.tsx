import React from 'react';
import ProjectCard from '../components/ProjectCard';

interface props {
    ProjectArray: {
        projects: {
            name: string,
            url: string,
            img: string,
            logo: string,
            gif: string,
            description: string,
            ghlink: string,
            tech: string[]
        }[]
    }
}

const Projects = ({ ProjectArray: { projects }} : props) => {

    return (
        <>
            <section className="projects-section">
                <h2 className='project-header'>Projects</h2>
                {projects.map(project => <ProjectCard project={project} key={project.name} />)}
            </section>

    <style jsx>{`
        .projects-section {
            width: 100%;
            min-height: 50%;
            display: flex;
            flex-flow: column;
        }

        .project-header {
            color: white;
            margin: 0 auto 25px auto;
        }
    `}</style>
        </>
    );
};

export default Projects;