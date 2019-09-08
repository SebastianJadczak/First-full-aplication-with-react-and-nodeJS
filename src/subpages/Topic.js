import React from 'react';


const Topic = (props) => {



    return (
        <>
            <p className="TopicTitle">{props.Title}</p>
            <p className="TopicContent">{props.Content}</p>
            <div className="More"> <button className="buttonTopic">Więcej</button></div>
        </>
    )
}
export default Topic;