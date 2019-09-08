import React, { Component } from "react"
import TopicsJSON from "../JSON/Topics.json"
import { NavLink } from 'react-router-dom'
import "../styles/TopicList.css"


class TopicList extends Component {



    render() {
        const elements = TopicsJSON.map(item => (
            <li key={item.id}><NavLink to={item.path}>{item.title}</NavLink></li>
        ))
        return (

            <ul>
                {elements}
            </ul>
        )
    }
}
export default TopicList;