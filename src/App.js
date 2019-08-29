import React, { Component } from 'react';
import './App.css';

class App extends Component {



  render() {

    return (
      <div className="App">
        <div className="login">
          <label>Login</label> <input type="text" />
          <label>Password</label><input type="password" /> <button>Zaloguj</button>
        </div>
      </div>
    )
  }
}
export default App;