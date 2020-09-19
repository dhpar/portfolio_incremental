import React from "react";
// Helper component that we need to use in order to have breaklines when in the json data file enter a \\n
export default ({text, classname: classStyle}) => {
    return text.split('\\n').map((paragraph, index) => 
        <p key={index} classname={classStyle}>{paragraph}</p>)
}