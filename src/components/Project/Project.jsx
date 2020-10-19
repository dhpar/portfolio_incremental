import React from 'react';
import Paragraphs from '../Paragraph/Paragraph';
import styles from './Project.module.css';
import YtVideo from '../YtVideo/YtVideo';

export default ({project: projects}) => (
    <article>
        <h3>Some of my work</h3>
        <ul className={styles.projects}>
            {projects.map((project, index)=> 
                <li key={index}>
                    <h4>{project.name}</h4>
                    <h5>
                        {project.clientUrl? 
                            <a href={project.clientUrl}>{project.client}</a> : project.client
                        }
                    </h5>
                    <Paragraphs text={project.description} />
                    <YtVideo id={project.youtubeId} title={project.name} />
                </li>
            )}
        </ul>
    </article>
)
