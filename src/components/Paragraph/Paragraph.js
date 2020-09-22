import React from "react";
// Helper component that we need to use in order to have breaklines when in the json data file enter a \\n
export default ({text}) => 
    text
        .split('\\n')
        .map((paragraph, index) => 
            <p key={index}>{paragraph}</p>)
