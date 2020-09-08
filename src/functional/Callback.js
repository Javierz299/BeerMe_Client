import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../utils/auth';
import Loading from '../loading/loading'

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <Loading />
    );
  }
}

export default withRouter(Callback);