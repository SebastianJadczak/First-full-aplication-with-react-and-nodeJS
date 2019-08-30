import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './Pages/Navigation'
import Main from './Pages/Main'
import Footer from './Pages/Footer'


class App extends Component {
  state = {
    login: "",
    password: "",
    correctLogin: null,
    notCorrectLogin: null,
  }




  handleClickLogin = () => {
    fetch('/login', {
      method: 'GET',
    })
      .then(r => r.json())
      .then(data => {
        this.checkLogin(data)
      });
  }

  checkLogin = (data) => {

    if (data.login === this.state.login && data.password === this.state.password) {
      this.setState({
        correctLogin: true,
        notCorrectLogin: false
      })
    } else {
      this.setState({
        notCorrectLogin: true
      })
    }
  }
  handleChangeLogin = (e) => {
    this.setState({
      login: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleLogOut = () => {
    this.setState({
      correctLogin: null,
      login: "",
      password: "",
    })
  }


  render() {


    return (
      <div className="App">


        {this.state.correctLogin === null ?

          <div className="login">

            <p> Main </p>
            <label >login</label>
            <input type="text" onChange={this.handleChangeLogin} />
            <label>Password</label>
            <input type="password" onChange={this.handleChangePassword} />
            <button onClick={this.handleClickLogin}>Loguj</button>

            {this.state.notCorrectLogin ? "Spróbuj jeszcze raz" : null}


          </div>
          : null}

        {this.state.correctLogin ?

          < Router >
            <nav className="navigation">
              <Navigation handleLogOut={this.handleLogOut} />
            </nav>
            <main>
              <section className="main">
                <Main />
              </section>
            </main>
            <footer>
              <Footer />
            </footer>
          </Router>
          : null}

      </div>

    )
  }
}
export default App;