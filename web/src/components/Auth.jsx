import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';

import { providerFacebook, auth } from '../.env/firebase.config.js';
import Loader from './Loader.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthed: false,
      isLoaded: false
    }
  }

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuthed: true,
          isLoaded: true
        });
      } else {
        this.setState({
          isAuthed: false,
          isLoaded: true
        });
      }
    });
  }

  tryLogin() {
    auth.signInWithRedirect(providerFacebook);
  };

  render() {
    if (!this.state.isLoaded) {
      return (
        <Loader />
      );
    }

    if (this.state.isAuthed) {
      this.props.history.push('/domain/list');
    }

    return (
      <>
        <Button variant="contained" color="primary" onClick={this.tryLogin}>
          Login
        </Button>
      </>
    );
  }
}

export default Auth;
