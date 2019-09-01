import React from 'react';
import "../styles/LeftNav.css"
import { NavLink } from 'react-router-dom'

const list = [
    { id: 1, title: "Programowanie", path: "/programming" },
    { id: 2, title: "Grafika", path: "/graphics" },
    { id: 3, title: "Analityka", path: "/analytics" },
    { id: 4, title: "Administracja", path: "/administration" }
]

const LeftNav = () => {
    const menu = list.map(item => (
        <li key={item.id}> <NavLink key={item.id} to={item.path}>{item.title}</NavLink></li>
    ))
    return (
        <>
            <p className="LeftNav">Grupy dyskusyjne</p>
            <ul>{menu}</ul>
        </>
    )
}
export default LeftNav;