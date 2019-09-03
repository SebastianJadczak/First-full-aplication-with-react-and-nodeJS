import React, { Component } from "react";
import boardListJSON from "../JSON/Board.json"
import { NavLink } from 'react-router-dom'


class Board extends Component {
    state = {
        zz: []
    }
    // componentDidMount() {

    //     fetch('/board1', {
    //         method: 'GET',
    //     })
    //         .then(r => r.json())
    //         .then(data => {
    //             this.Xx(data.xx)
    //         });
    // }



    render() {

        const elements = boardListJSON.map(item => (
            <li key={item.id}><NavLink to={item.path}>{item.name}</NavLink></li>
        ))
        return (
            <>
                <p>Board</p>
                <div className="board">
                    <ul>
                        {elements}
                    </ul>
                </div>
            </>
        )
    }
}
export default Board;