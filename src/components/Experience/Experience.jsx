import React from 'react';
import Images from '../Images/images.jsx';
import Paragraphs from '../Paragraph/Paragraph.js';
import styles from './Experience.module.css';

export default props => {
    return (
        <article>
            <h3>Experience</h3>
            <ul className={styles.experienceList}>
                {props.experience.map((company, index) => 
                    <li className={styles.experience} key={index}>
                        <header>
                            <Images company={company.name} images={company.logo} type='logo'/>

                            <h4 className={styles.company}><a href={company.website}>{company.name}</a></h4>
                        </header>

                        <Paragraphs text={company.description} />

                        <details>
                            <summary>Tech stack used in the project/s</summary>
                            <ul>
                                { company.tools.map((tool, index) => <li key={index}>{tool}</li>) }
                            </ul>
                        </details>

                        <Images company={company.name} images={company.images} type='screenshots'/>
                    </li>
                )}
            </ul>
        </article>
    );
}

