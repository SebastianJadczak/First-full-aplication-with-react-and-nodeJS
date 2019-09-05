import React, { Component } from 'react';
import Reg from "../JSON/Regulations.json"
import "../styles/Programming.css"
import ProgrammingReg from "./ProgrammingReg"

class Programming extends Component {

    state = {
        regulations: true,
    }

    handleAcceptRegulations = () => {
        this.setState({ regulations: false })
    }

    render() {

        const { regulations } = this.state


        return (
            <div className="SubPageProgramming">
                {regulations ?
                    <ProgrammingReg RegTitle={Reg.title} RegReg={Reg.regulations} AcceptReg={this.handleAcceptRegulations} />
                    : null
                }
                {regulations ? null :
                    <div className="programming">
                        <h2>Grupa dyskusyjna "Programowanie"</h2>
                    </div>}
            </div>
        )
    }
}
export default Programming