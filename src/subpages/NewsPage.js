import React from "react";
import NewsJSON from "../JSON/News.json"
import "../styles/NewsPage.css"

const NewsPage = () => {
    const news = NewsJSON.map(item => (
        <div className="news" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
    ))
    return (
        <div className="newsBox">
            <p className="titleNewsBox">Co tam nowego w reactnode: </p>
            {news.reverse()}
        </div>
    )
}
export default NewsPage;