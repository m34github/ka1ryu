import React from 'react';
import { Button } from '@material-ui/core';

import Header from './Header.jsx';

class SampleA extends React.Component {
  render() {
    return (
      <>
        <Header />

        <section>
          SampleA's page

          <Button
            variant="contained"
            color="secondary"
            onClick={() => { this.props.history.push('/sample/B'); }}
          >
            GoTo B
          </Button>
        </section>
      </>
    );
  }
}

export default SampleA;
