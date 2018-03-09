// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({onSubmit,onChange, errors,successMessage,user}) => (
  <div className="card" style={{padding: '10px'}}>
    {/* <h3 className="card-header"> Welcome back to TraveLlama </h3> */}
    <div className="card-block">
    <h2 className="card-header">Login</h2> 
    <form action="/" className="form-control" onSubmit={onSubmit}>


      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
    </div>
  </div>


);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
