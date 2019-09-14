import React, { Component } from "react"
import TopicsJSON from "../JSON/Topics.json"
import "../styles/TopicList.css"
import Topic from './Topic'
import TopicDetail from "./TopicDetail"


class TopicList extends Component {

    state = {
        topicDetail: false,
        title: "",
        content: ""
    }

    handlebuttonTopic = (title, content) => {
        this.setState({
            topicDetail: true,
            title: title,
            content: content
        })

    }
    handleCloseTopicDetail = () => {
        this.setState({
            topicDetail: false,
        })
    }

    render() {

        const elements = TopicsJSON.map(item => (
            <li key={item.id} className="Topic"><Topic Title={item.title} Content={item.content} handlebuttonTopic={this.handlebuttonTopic} /></li>
        ))
        return (
            <>
                <ul>
                    {elements}
                </ul>
                {this.state.topicDetail ? <TopicDetail title={this.state.title} content={this.state.content} close={this.handleCloseTopicDetail} /> : null}
            </>
        )
    }
}
export default TopicList;