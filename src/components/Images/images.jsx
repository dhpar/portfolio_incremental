import React from 'react';
import styles from './images.module.css';

// TODO: extract to different components (ie: logos, screenshots, ...)
// This is a helper component that will load images in bulk inside a directory, in order to load in a different script we need to:
// * Import this script.
// * Load the imported script as a React component with the name of the image file that we 
// need to load (with the image extension) ie: <Images images="name.jpg" />

export default ({images, company, type = null}) =>  {
    let imagesPath = '';
    let ImagesList = [];
    switch(type) {
        case 'logo':
            imagesPath = require.context('../../uploads/logos/', true);
            ImagesList = () => 
                <img 
                    className={styles.image} 
                    src={images && imagesPath('./' + images)} 
                    alt={`${company}'s screenshot`} 
                />;
            break;
        case 'screenshots':
            imagesPath = require.context('../../uploads/screenshots/companies/', true);
            ImagesList = () => images.map((image, index) => 
                <img 
                    className={styles.image} 
                    src={image && imagesPath('./' + image)} 
                    key={index} 
                    alt={`${company}'s screenshot`} 
                />);
            break;
    }

    


    return <div className = {styles.imagesContainer}>
        <ImagesList />
    </div>
}
