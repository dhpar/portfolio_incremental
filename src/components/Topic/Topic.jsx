import React from 'react';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import styles from './Topic.module.css';

export default props => {
    const renderTopic = (topic, obj) => {
        switch(topic){
            case 'experience':
                return <Experience experience={obj.experiences}/>;
            case 'project':
                return (
                <article>
                    <h3>Some of my work</h3>
                    <ul>
                    {obj.projects.map((project, index)=>
                        <Project project={project} key={index} />)}
                    </ul>    
                </article>);
            case 'findme':
                return (
                <article className={styles.alternate}>
                    <h3>Where to find me</h3>
                    <ul className={styles.contactInfo}>
                    {obj.Contacts.map((contact, index)=> 
                        <li key={index}>
                            <a href={contact.url}>{contact.name}</a>
                        </li>)}
                    </ul>
                </article>);
            default:
                return (<p>Couldn't load the component component</p>);
        }
    };
    
    return (renderTopic(props.topic, props.appObj));
}