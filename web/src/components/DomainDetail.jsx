import React from 'react';

import Header from './Header.jsx';
import Loader from './Loader.jsx';

class DomainDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      hasData: false
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

        <section style={{
          
        }}>

        </section>
      </>
    );
  }
}

export default DomainDetail;
