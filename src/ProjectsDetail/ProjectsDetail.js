import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Project from './Project';

const ProjectsDetail = (props) => {
    const [projects, setProjects ] = useState([]);

    useEffect( () => {
        fetch(`projects.json/${projects.id}`)
        .then ( res => res.json())
        .then (data => setProjects(data));

    }, [])
    return (
        <div>
            <div className="">
                {
                    projects.map(project=><Project 
                        key={project.id}
                        ></Project>)
                }
            </div>
        </div>
    );
};

export default ProjectsDetail;