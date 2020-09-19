import React from 'react';
import styles from './images.module.css';

// This is a helper component that will load images in bulk inside a directory, in order to load in a different script we need to:
// * Import this script.
// * Load the imported script as a React component with the name of the image file that we 
// need to load (with the image extension) ie: <Images images="name.jpg" />

export default props =>  {
    const images = require.context('../../uploads/screenshots/companies/', true);
    return props.images.map((image, index) => 
        <img 
            className={styles.image} 
            src={image && images('./' + image)} 
            key={index} 
            alt={`${props.company}'s screenshot`} 
        />);
}
