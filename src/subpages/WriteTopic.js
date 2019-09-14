import React from "react";
import '../styles/WriteTopic.css'

const WriteTopic = () => {
    return (
        <>
            <textarea className="NewTopic"></textarea>

            <div className="buttonNewTopic"> <button className="addNewTopic">Dodaj</button></div>
        </>
    )
}
export default WriteTopic;