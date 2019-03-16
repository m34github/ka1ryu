import React from 'react';
import { Button } from '@material-ui/core';

import Header from './Header.jsx';

class SampleB extends React.Component {
  render() {
    return (
      <>
        <Header />

        <section>
          SampleB's page

          <Button
            variant="contained"
            color="primary"
            onClick={() => { this.props.history.push('/sample/A'); }}
          >
            GoTo A
          </Button>
        </section>
      </>
    );
  }
}

export default SampleB;
