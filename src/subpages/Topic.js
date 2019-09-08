import React from 'react';


const Topic = (props) => {


    return (
        <>
            <p className="TopicTitle">{props.Title}</p>
            <p className="TopicContent">{props.Content}</p>
            <div className="More"> <button onClick={() => props.handlebuttonTopic(props.Title, props.Content)} className="buttonTopic">Więcej</button></div>
        </>
    )
}

export default Topic;