import React from 'react';
import ReactDOM from 'react-dom';
import { Fab, Grid, Icon } from '@material-ui/core';

import Header from './components/Header.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Grid container alignItems="center" justify="center">
        <Grid style={{ padding: 24 }}>
          <section style={{
            background: 'url(https://source.unsplash.com/random/500x500) center / cover',
            height: '80vw',
            width: '80vw',
            border: 'solid 3vw #fff',
            boxShadow: '0 1vw 3vw #999'
          }} />
        </Grid>
      </Grid>
      <section style={{
        position: 'fixed',
        right: '6vw',
        bottom: '6vw'
      }}>
        <Fab color="secondary" onClick={() => { location.reload(); }}>
          <Icon fontSize="large">directions_run</Icon>
        </Fab>
      </section>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
