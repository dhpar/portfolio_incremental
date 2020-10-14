import React from 'react';

// TODO: extract to different components (ie: logos, screenshots, ...)
// This is a helper component that will load images in bulk inside a directory, in order to load in a different script we need to:
// * Import this script.
// * Load the imported script as a React component with the name of the image file that we 
// need to load (with the image extension) ie: <Images images="name.jpg" />

export default ({images, company, type = null, className}) =>  {
    const imagesPath = require.context('../../uploads/screenshots/companies/', true);
    const ImagesList = () => images.map((image, index) => 
        <picture key={index}>
            {/* <source media="(max-width: 799px)" srcset="elva-480w.jpg" />
            <source media="(min-width: 800px)" srcset="elva-800w.jpg" /> */}
            <img 
                className={className} 
                src={image && imagesPath('./' + image)} 
                alt={`${company}'s screenshot`} 
            />
        </picture>);

    return <ImagesList />
}
