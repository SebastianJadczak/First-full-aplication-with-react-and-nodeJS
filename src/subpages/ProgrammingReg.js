import React from 'react';

const ProgrammingReg = (props) => {

    const { RegTitle, RegReg, AcceptReg } = props

    return (
        <div className="regulations">
            <h3>{RegTitle}</h3>
            <p>{RegReg}</p>
            <button className="regulations" onClick={AcceptReg}>Rozumiem</button>
        </div>
    )
}
export default ProgrammingReg