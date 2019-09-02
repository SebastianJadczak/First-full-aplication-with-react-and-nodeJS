import React, { Component } from 'react';
import "../styles/MyProfil.css"
import MyArray from "./MyArray"

class MyProfil extends Component {

    state = {
        name: "",
        surname: "",
        adress: ""
    }

    handleProfil = () => {
        fetch('/myprofil1', {
            method: 'GET',
        })
            .then(r => r.json())
            .then(data => {
                this.showPersonDetails(data)
            });

    }
    showPersonDetails = (data) => {
        this.setState({
            name: data.name,
            surname: data.surname,
            adress: data.adress
        })
    }

    componentDidMount() {
        this.handleProfil()
    }
    componentWillUnmount() {
        this.handleProfil()
    }
    render() {
        // this.handleProfil()
        return (
            <>
                <div className="ProfilUser">
                    <p className="name">Imię: {this.state.name}</p>
                    <p className="surname">Nazwisko: {this.state.surname}</p>
                    <p className="adress">Adres: {this.state.adress}</p>
                </div>
                <div className="MyArray">
                    <MyArray />
                </div>
            </>
        )
    }
}
export default MyProfil;