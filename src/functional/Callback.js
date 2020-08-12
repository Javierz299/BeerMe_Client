import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../utils/auth';

class Callback extends Component {
  async componentDidMount() {
      console.log('props from callback',this.props)
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default withRouter(Callback);