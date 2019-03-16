import React from 'react';
import { Button } from '@material-ui/core';

import Header from './Header.jsx';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Rectangle } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={20}
    defaultCenter={{ lat: -0.203607, lng: 51.521238 }}
  >
    {props.isMarkerShown &&
    <Rectangle defaultBounds={{
      north: -0.203607,
      south: -0.203564,
      east: 51.521265,
      west: 51.521238
    }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

class SampleB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
    };
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick() {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

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
        <MyMapComponent isMarkerShown={this.state.isMarkerShown} onMarkerClick={this.handleMarkerClick} />
      </>
    );
  }
}

export default SampleB;
