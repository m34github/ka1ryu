import React from 'react';
import { Button, Card, CardMedia, Grid } from '@material-ui/core';
import qs from 'query-string';

import { db } from '../.env/firebase.config.js';
import Header from './Header.jsx';
import Loader from './Loader.jsx';

const data = {
  dj: {
    preview: '/assets/img/dj.png',
    model: 'https://firebasestorage.googleapis.com/v0/b/ka1ryu.appspot.com/o/dj.gltf?alt=media&token=6abc0d01-d407-46f4-8298-ef6351e13037'
  },
  model: {
    preview: '/assets/img/model.png',
    model: 'https://firebasestorage.googleapis.com/v0/b/ka1ryu.appspot.com/o/model.gltf?alt=media&token=46a9f7cd-6745-427c-8fa8-4a0c0e64b4b5'
  },
  roboto: {
    preview: '/assets/img/roboto.png',
    model: 'https://firebasestorage.googleapis.com/v0/b/ka1ryu.appspot.com/o/roboto.gltf?alt=media&token=d936abc6-f33e-4f83-9503-ccc4f5be9dd4'
  }
};

class DomainDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      hasData: false,
      selected: null
    };
  }

  componentDidMount() {
    if (this.props.history.location.state) {
      this.setState({
        isLoaded: true,
        hasData: true
      });
    } else {
      this.setState({
        isLoaded: true,
        hasData: false
      });
    }
  }

  postModel(domain) {
    db.collection('land').doc(domain).update({
      contents: data[this.state.selected].model,
      price: 100,
      timestamp: Date.now(),
      uid: 'iGipD3GaWrwb7k2q4k58',
      walletId: 'test'
    })
    .then(() => {
      this.props.history.push('/domain/list');
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <Loader />
      );
    }

    if (!this.state.hasData) {
      this.props.history.push('/auth');
    }

    return (
      <>
        <Header />

        <section>
          <Grid container spacing={0}>
            <Grid item xs={9}>
              <section style={{
                height: '100%',
                padding: 24
              }}>
                <section style={{
                  background: '#000',
                  height: '100%'
                }}>
                  <section style={{
                    background: `url(${ this.state.selected ? data[this.state.selected].preview : '' })
                      center / cover`,
                    height: '100%'
                  }} />
                </section>
              </section>
            </Grid>
            <Grid item xs={3}>
              <section style={{
                padding: 12
              }}>
                <section style={{
                  padding: 12
                }}>
                  <Card style={{
                    height: '20vh'
                  }}>
                    <CardMedia
                      style={{
                        height: '100%'
                      }}
                      onClick={() => {
                        this.setState({
                          selected: 'dj'
                        });
                      }}
                      image={data.dj.preview}
                    />
                  </Card>
                </section>
                <section style={{
                  padding: 12
                }}>
                  <Card
                    style={{
                      height: '20vh'
                    }}
                    onClick={() => {
                      this.setState({
                        selected: 'model'
                      });
                    }}
                  >
                    <CardMedia
                      style={{
                        height: '100%'
                      }}
                      image={data.model.preview}
                    />
                  </Card>
                </section>
                <section style={{
                  padding: 12
                }}>
                  <Card style={{
                    height: '20vh'
                  }}>
                    <CardMedia
                      style={{
                        height: '100%'
                      }}
                      onClick={() => {
                        this.setState({
                          selected: 'roboto'
                        });
                      }}
                      image={data.roboto.preview}
                    />
                  </Card>
                </section>
                <section style={{
                  padding: 12
                }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    disabled={!this.state.selected}
                    fullWidth
                    onClick={() => {
                      const parsed = qs.parse(this.props.history.location.search);
                      this.postModel(parsed.domain);
                    }}
                  >
                    update
                  </Button>
                </section>
              </section>
            </Grid>
          </Grid>
        </section>
      </>
    );
  }
}

export default DomainDetail;
