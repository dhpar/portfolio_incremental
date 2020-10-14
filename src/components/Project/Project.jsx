import React from 'react';
import Paragraphs from '../Paragraph/Paragraph';
import styles from './Project.module.css';

export default props => {
    const YoutubeVideo = (youtubeId, title) => {
        if(youtubeId.id !== undefined)
            return (
                <iframe 
                    src={`https://www.youtube.com/embed/${youtubeId.id}`} 
                    frameBorder="0" 
                    allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                    allowFullScreen 
                    title={title} />
            );
        return null;
    }  

    return (
        <article>
            <h3>Some of my work</h3>
            <ul className={styles.projects}>
                {props.project.map((project, index)=> 
                    <li key={index}>
                        <h4>{project.name}</h4>
                        {project.clientUrl? 
                            <h5><a href={project.clientUrl}>{project.client}</a></h5> : <h5>{project.client}</h5>
                        }
                        <Paragraphs text={project.description} />
                        <YoutubeVideo id={project.youtubeId} title={project.name} />
                    </li>
                )}
            </ul>
        </article>
    )
}
