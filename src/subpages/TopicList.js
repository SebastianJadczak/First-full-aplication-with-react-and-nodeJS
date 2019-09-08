import React, { Component } from "react"
import TopicsJSON from "../JSON/Topics.json"
import { NavLink } from 'react-router-dom'
import "../styles/TopicList.css"
import Topic from './Topic'


class TopicList extends Component {



    render() {
        // const elements = TopicsJSON.map(item => (
        //     <li key={item.id}><NavLink to={item.path}>{item.title}</NavLink></li>
        // ))


        const elements1 = TopicsJSON.map(item => (
            <li key={item.id} className="Topic"><NavLink to={item.path}><Topic Title={item.title} Content={item.content} /></NavLink></li>
        ))
        return (

            <ul>
                {/* {elements} */}
                {elements1}
            </ul>
        )
    }
}
export default TopicList;