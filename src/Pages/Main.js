import React, {
    Component
} from 'react';

class Main extends Component {

    // state = {
    //     login: "",
    //     password: "",
    //     correctLogin: false,
    //     notCorrectLogin: null,
    //     webside: false,
    // }




    // handleClickLogin = () => {
    //     fetch('/login', {
    //         method: 'GET',
    //     })
    //         .then(r => r.json())
    //         .then(data => {
    //             this.checkLogin(data)
    //         });
    // }

    // checkLogin = (data) => {

    //     if (data.login === this.state.login && data.password === this.state.password) {
    //         this.setState({
    //             correctLogin: true,
    //             notCorrectLogin: false
    //         })
    //     } else {
    //         this.setState({
    //             notCorrectLogin: true
    //         })
    //     }
    // }
    // handleChangeLogin = (e) => {
    //     this.setState({
    //         login: e.target.value
    //     })
    // }

    // handleChangePassword = (e) => {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }

    render() {
        return (
            // <div>
            //     <p> Main </p>
            //     <label >login</label>
            //     <input type="text" onChange={this.handleChangeLogin} />
            //     <label>Password</label>
            //     <input type="password" onChange={this.handleChangePassword} />
            //     <button onClick={this.handleClickLogin}>Loguj</button>

            //     {this.state.notCorrectLogin ? "Spróbuj jeszcze raz" : null}
            //     {this.state.correctLogin ? "Udało Ci się zalogować" : null}
            // </div>
            <p>null</p>
        )
    }
}
export default Main