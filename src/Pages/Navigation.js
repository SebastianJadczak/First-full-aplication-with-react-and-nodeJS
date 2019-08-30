import React, { Component } from "react"

class Navigation extends Component {
    render() {
        return (
            <button onClick={this.props.handleLogOut}>Wyloguj</button>
        )
    }
}
export default Navigation;