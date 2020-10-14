import React from 'react';
import styles from './Findme.module.css';
import appStyles from '../../App.module.css';

export default props => {
    return (
        <article className={appStyles.fullBleed + ' ' + styles.alternate}>
            <h3>Where to find me</h3>
            <ul className={styles.contactInfo}>
            {props.contacts.map((contact, index)=> 
                <li key={index}>
                    <a href={contact.url}>{contact.name}</a>
                </li>)}
            </ul>
        </article>
    );
}
