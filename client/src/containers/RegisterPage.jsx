import React, {Component} from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';


class RegisterPage extends Component {
  state = {
    redirect: false,
    errors: {},
    name: "",
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  registerUser = (event) => {
    event.preventDefault()
    console.log("working")
    const name = this.state.name
    const email =this.state.email
    const password = this.state.password
    axios.post("/auth/signup", {name, email, password})
    .then((res)=> {
      localStorage.setItem('successMessage',res.response.message);
      this.setState({ redirect: true });
    })
    .catch((err)=> {
      console.log(err)
    })
  }


render() {
  return (
    <div className="card">
       <form style={{ padding: '10px' }}>
      <h2 className="card-heading">Sign Up</h2>

      {this.state.errors.summary && <p className="error-message">{this.state.errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={this.state.errors.name}
          onChange={this.handleInputChange}
      
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={this.state.errors.email}
          onChange={this.handleInputChange}
   
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={this.handleInputChange}
          errorText={this.state.errors.password}

        />
      </div>

      <div className="button-line">
        <button className="btn btn-primary" onClick={this.registerUser}/>
      </div>

      <CardText>
        Already have an account? <Link to="/login">Log in</Link>
      </CardText>
    </form>
    </div>
  )
}
}

export default RegisterPage