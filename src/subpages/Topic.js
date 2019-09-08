import React from 'react';
import Topics from "../JSON/Topics.json"

const Topic = () => {

    const tt = Topics.find(item => item.id === 1)

    return (
        <>
            <p className="TopicTitle">{tt.title}</p>
            <p className="TopicContent">{tt.content}</p>
        </>
    )
}
export default Topic;