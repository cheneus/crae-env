// import React, { PropTypes } from 'react';

import React from "react";

import PropTypes from "prop-types";

import { Card, CardTitle, CardText } from "material-ui/Card";

const Dashboard = ({ secretData }) => (
  <div className="container" style={{ padding: "10px" }}>
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>

    {secretData && (
      <CardText style={{ fontSize: "16px", color: "green" }}>
        {secretData}
      </CardText>
    )}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
