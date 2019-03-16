import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';

import { auth, db } from '../.env/firebase.config.js';
import Header from './Header.jsx';
import Loader from './Loader.jsx';

const data = {
  land: {
    'alice.bob.cathy': {
      lat: 123,
      lng: 456
    },
    'clock.time.watch': {
      lat: 123,
      lng: -36
    },
    'foo.bar.baz': {
      lat: -127.45,
      lng: 135
    }
  }
};

class DomainList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isAuthed: false,
      isLoaded: false,
      docs: []
    };
  }

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isChecked: true,
          isAuthed: true
        });
      } else {
        this.setState({
          isChecked: true,
          isAuthed: false
        });
      }
    });
  }

  getLand() {
    db.collection('land').get().then(snapshot => {
      this.setState({
        isLoaded: true,
        docs: snapshot.docs
      });
    });
  }

  render() {
    if (!this.state.isChecked) {
      return (
        <Loader />
      );
    }

    if (!this.state.isAuthed) {
      this.props.history.push('/auth');
    }

    if (!this.state.isLoaded) {
      this.getLand();
    }

    return (
      <>
        <Header />

        <section>
          <Grid container spacing={0}>
            <Grid item xs={6} style={{
              padding: 24
            }}>
              {
                this.state.docs.map((domain, i) => (
                  <section key={i} style={{
                    paddingTop: 8,
                    paddingBottom: 8
                  }}>
                    <Card
                      style={{
                        width: '100%',
                        height: 80,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      onClick={() => { console.log(domain); }}
                    >
                      <CardContent>
                        <Typography variant="h5">{`/// ${domain.id}`}</Typography>
                      </CardContent>
                    </Card>
                  </section>
                ))
              }
            </Grid>
            <Grid item xs={6}>
              <section style={{
                background: 'url(https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDm4sYbQDH7-ZvntWIPFNhmy-hZ17_kYZI&center=Hamamatsucho&zoom=19&scale=1&size=1200x1200&maptype=roadmap&format=png&visual_refresh=true) center / cover',
                height: '92vh',
                width: '100%'
              }} />
            </Grid>
          </Grid>
        </section>
      </>
    );
  }
}

export default DomainList;
