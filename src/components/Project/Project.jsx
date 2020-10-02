import React from 'react';
import Paragraphs from '../Paragraph/Paragraph';
export default ({project: {name, clientUrl, client, description, images, videos}}) => {
    const renderImages = ({imagesList}) => {
        return (
            <ul>
                {imagesList.map((image, index)=>
                    <li key={index}>
                        <img src={window.location.href + "uploads/" + image} alt={name + " image " + index}/>
                    </li>
                )}
            </ul>
        )
    };
    const renderVideos = ({videosList}) => {
        return (
            <ul>
                {videosList.map((video, index) =>
                    <li key={index}>
                        <video controls title={"video-" + index}>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </li>
                )}
            </ul>
        );
    }

    return (
        <li>
            <h4>{name}</h4>
            {clientUrl? 
                <h5><a href={clientUrl}>{client}</a></h5> : <h5>{client}</h5>
            }
            <Paragraphs text={description} />
            <renderImages imageList={images}/>
            <renderVideos videosList={videos}/>
        </li>
    )
}
