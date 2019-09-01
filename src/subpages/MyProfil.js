import React, { Component } from 'react';


class MyProfil extends Component {

    state = {
        name: ""
    }

    handleProfil = () => {
        fetch('/myprofil1', {
            method: 'GET',
        })
            .then(r => r.json())
            .then(data => {
                this.showName(data)
            });

    }
    showName = (data) => {
        this.setState({
            name: data.name
        })


    }
    render() {
        this.handleProfil()
        return (
            <div className="ProfilUser">
                <p className="name">Imię: {this.state.name}</p>
                <p className="surname">Nazwisko: </p>
                <p className="adress">Adres: </p>
            </div>
        )
    }
}
export default MyProfil;