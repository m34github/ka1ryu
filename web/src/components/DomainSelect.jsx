import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Rectangle} from "react-google-maps";
import axios from 'axios';

import { auth, db } from '../.env/firebase.config.js';
import Header from './Header.jsx';
import Loader from './Loader.jsx';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),lifecycle({
    componentWillMount() {
      const refs = {}
      const latlng = null

      this.setState({
        bounds: null,
        center: {
          lat: 41.9, lng: -87.624
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },onMapClick: () => {
            const bounds =refs.map.getBounds()
            const latitude = bounds.ma.j
            const longitude = bounds.ga.j
            const getDomainUrl = "https://api.what3words.com/v2/reverse?coords="+latitude+"%2C"+longitude+"&key=FWSNV1X2"
            console.log("latitude : " + latitude)
            console.log("longitude : " + longitude)
            axios(getDomainUrl)
            .then((results) => {
                console.log("domain : " + results.data.words)
              },
              (error) => {
                console.log(error)
              });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={20}
    defaultCenter={{ lat: 35.653956, lng: 139.756089 }}
    onBoundsChanged={props.onBoundsChanged}
    onClick={props.onMapClick}
  >
  {props.isMarkerShown &&
  <Rectangle defaultBounds={{
    north: 35.653956,
    south: 35.653946,
    east: 139.756089,
    west: 139.756069
  }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

class DomainSelect extends React.Component {
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


  handleMarkerClick(){
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <>
        <Header />

        <section>
        </section>
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
        <Grid container justify="flex-end">
          <Button
            variant="contained"
            color="secondary"
          >購入</Button>
        </Grid>
      </>
    );
  }
}

export default DomainSelect;
