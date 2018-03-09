// Defining a stateless, functional component, MyNavLinks.
// This component contains your navigation links.
import React, {Component} from "react";
// import AppBar from "material-ui/AppBar";
// import FlatButton from "material-ui/FlatButton";
// import ToolbarGroup from "material-ui/Toolbar/ToolbarGroup";
import { Link } from "react-router-dom";
import Auth from "../../../modules/Auth";
import "./navbar.css";
// Another stateless, functional component, MyAppBar.
// Here we are setting the iconElementRight property of Material UI's AppBar
// to the component defined above.
// const NavBar = () => (
 
// );

class NavBar extends Component {
  state = {
    isLoggedIn: false
  }

  deAuth = () => {
    this.setState({isLoggedIn: false})
    Auth.deauthenticateUser()
  }
  checkAuth = () => {
    Auth.isUserAuthenticated ? this.setState({isLoggedIn: false}) : this.setState({isLoggedIn: true})
  }

  componentWillMount() {
    (localStorage.getItem('token')===null) ? this.setState({isLoggedIn: false}) : this.setState({isLoggedIn: true})
  }

  render() {
    return (
      <div className="jumbotron">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand">
        <img src="img/myLlama_updated.png" alt="logo" className="blogo img img-fluid"/>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quiz">
                Quiz
              </a>
            </li>
          </ul>
          {!this.state.isLoggedIn ? (
          // {Auth.isUserAuthenticated ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Register
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link nav-button"
                  onClick={this.deAuth}
                >
                  Log Out
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
    )
  }
}

export default NavBar;
