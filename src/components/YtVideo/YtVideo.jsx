import React from 'react';
import styles from './YtVideo.module.css';

export default props => {
    if(props.id !== undefined)
        return (
            <div className={styles.videoWrapper}>
                <iframe 
                    src={`https://www.youtube.com/embed/${props.id}`} 
                    frameBorder="0" 
                    allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                    allowFullScreen 
                    title={props.title} />
            </div>
        );
    return null;
}  