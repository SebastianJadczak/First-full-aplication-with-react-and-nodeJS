import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css"

const list = [
    { id: 1, title: "Start", path: "/" },
    { id: 2, title: "Tablica", path: "/board" },
    { id: 3, title: "Mój Profil", path: "/myprofil" },
    { id: 4, title: "Ogłoszenia", path: "/ad" }
]

class Navigation extends Component {
    render() {

        const menu = list.map(item => (
            <NavLink id={item.id} to={item.path}>{item.title}</NavLink>
        ))

        return (
            <div className="nav">

                {menu}
                <button onClick={this.props.handleLogOut}>Wyloguj</button>
            </div>
        )
    }
}
export default Navigation;