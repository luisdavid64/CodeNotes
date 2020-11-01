import React, { Component } from 'react';
import UserAPI from './../../utils/UserAPI';
import { Redirect} from 'react-router-dom';
import uid from "uid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            loggedIn: false,
         }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = data.get("username");
        const pass = data.get("password");
        if(UserAPI.authenticate(user,pass)) {
            UserAPI.createCookie(uid());
            this.setState({
                loggedIn: true
            })
        } else {
            toast.error("Error: invalid username or email");
        }
    }

    render() { 
        var {loggedIn} = this.state;
        return (
            !loggedIn && !UserAPI.getCookie() ? 
                <div className="main-page main-page--blue ">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <p className="form__p">Welcome back</p>
                        <h1>Account Sign in</h1>
                        <input className="form__input" id="username" name="username" type="text" placeholder="Email"/>
                        <input className="form__input" id="password" name="password" type="password" placeholder="Password" />
                        <button className="form__button">Sign in</button>
                    </form>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            : <Redirect to={"/"}/>
         );
    }
}
 
export default Login;