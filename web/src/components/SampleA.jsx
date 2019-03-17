import React from 'react';
import { Button } from '@material-ui/core';

import Header from './Header.jsx';
// import App from '../../public/assets/js/app';

class SampleA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    window.App.init();
    this.setState({
      isLoaded: true
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <>
          Loading ---
        </>
      );
    }

    return (
      <>
        <Header />

        <section>
          SampleA's page

          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              window.App.handleAdopt(e);
              this.props.history.push('/sample/B'); 
            }}
            className="btn-adopt"
            data-id="0"
          >
            GoTo C
          </Button>
        </section>
      </>
    );
  }
}

export default SampleA;
