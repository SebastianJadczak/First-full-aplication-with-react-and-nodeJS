import React from "react";
import "../styles/TopicDetail.css"

const TopicDetail = (props) => {

    return (
        <div className="TopicDetail">
            <div className="x"> <span onClick={props.close}>X</span></div>
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    )
}
export default TopicDetail;