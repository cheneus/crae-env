import React from 'react';
import axios from 'axios';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import { Card } from 'material-ui/Card';

class DashboardPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      userData: {},
      token: '',
      message: ''
    };
  }

  componentWillMount() {
    this.setState((prevState) => {
      console.log(prevState.token);
      return { token: prevState.token };
    });
  }
  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const token = Auth.getToken()
    const config = {
      headers: { Authorization: `bearer ${Auth.getToken()}`,
        'x-access-token': Auth.getToken() },
        token
    };
    console.log(this.state.userData)
    axios.get('/profile', config)
      .then((res, req) => {
        console.log(res);
        this.setState({message:res.data.message})

      })
      .catch(err => console.log(err));
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <Card>
        <Dashboard secretData={this.state.message} />
      </Card>
    );
  }
}

export default DashboardPage;
