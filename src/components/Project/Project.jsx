import React from 'react';

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
            <p>{description}</p>
            <renderImages imageList={images}/>
            <renderVideos videosList={videos}/>
        </li>
    )
}
// export default class Project extends React.Component {
//     renderImages(){
//         if(this.props.project.images){
//             return <ul>
//                 {this.props.project.images.map((image, index)=>
//                     <li key={index}>
//                         <img src={window.location.href + "uploads/" + image} alt={this.props.project.name + " image " + index}/>
//                     </li>
//                 )}
//             </ul>
//         } else {
//             return;
//         }
//     }

//     renderVideos(){
//         if(this.props.project.videos){
//             return (
//                 <ul>
//                     {this.props.project.videos.map((video, index)=>
//                         <li key={index}>
//                             <video controls title={"video-" + index}>
//                                 <source src={video} type="video/mp4"/>
//                             </video>
//                         </li>
//                     )}
//                 </ul>
//             );
//         }else{
//             return;
//         }
//     }
    
//     render() {
//         return(
//             <li>
//                 <h4>{this.props.project.name}</h4>
//                 {this.props.project.clientUrl? 
//                     <h5><a href={this.props.project.clientUrl}>{this.props.project.client}</a></h5> : <h5>{this.props.project.client}</h5>
//                 }
//                 <p>{this.props.project.description}</p>
//                 {this.renderImages()}
//                 {this.renderVideos()}
//             </li>
//         )
//     };
// }