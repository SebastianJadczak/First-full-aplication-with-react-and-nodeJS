import React, { Component } from 'react';
import "../styles/MyProfil.css"


class MyProfil extends Component {

    state = {
        name: "",
        surname: "",
        adress: "",
        title: "",
        content: ""
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
            adress: data.adress,
            title: data.title,
            content: data.content
        })
    }


    componentDidMount() {
        this.handleProfil()

    }
    componentWillUnmount() {
        this.handleProfil()

    }
    render() {

        return (
            <div className="PageProfil">
                <div className="ProfilUser">
                    <p className="name">Imię: {this.state.name}</p>
                    <p className="surname">Nazwisko: {this.state.surname}</p>
                    <p className="adress">Adres: {this.state.adress}</p>
                </div>
                <div className="aboutMe">
                    <p className="about">{this.state.title}</p>
                    <p className="content">{this.state.content}</p>
                </div>
            </div>
        )
    }
}
export default MyProfil;