import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './Pages/Navigation'
import Main from './Pages/Main'
import Footer from './Pages/Footer'


class App extends Component {



  render() {


    return (
      <div className="App">
        <Router>
          <nav className="navigation">
            <Navigation />
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
      </div>
    )
  }
}
export default App;