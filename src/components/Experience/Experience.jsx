import React from 'react';
import Images from '../Images/images.jsx';
import Paragraphs from '../Paragraph/Paragraph.js';
import Logo from '../Images/logo.jsx';
import styles from './Experience.module.css';
import appStyles from '../../App.module.css';

export default props => 
(
    <article className={appStyles.fullBleed}>
        <h3>Experience</h3>
        <ul className={styles.experienceList}>
            {props.experience.map((company, index) => 
                <li className={styles.experience} key={index}>
                    <header>
                        <div className={styles.logowrapper}>
                            <Logo name={company.logo} />
                        </div>
                        <h4 className={styles.company}>
                            <a href={company.website}>{company.name}</a>
                        </h4>
                    </header>

                    <Paragraphs text={company.description} />

                    <details>
                        <summary>Tech stack used in the project/s</summary>
                        <ul>
                            {company.tools.map((tool, index) => 
                                 <li key={index}>{tool}</li>)
                            }
                        </ul>
                    </details>

                    <Images className={styles.screenshot} company={company.name} images={company.images} type='screenshots'/>
                </li>
            )}
        </ul>
    </article>
);
