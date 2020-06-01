import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import Card from '../../components/card/card';
import './googleMap.css';

const mapStyles = {
  width: '80%',
  height: '80%'
};

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 }
      ]
    };
  }

  displayMarkers = () => {
    const { reports } = this.props.response.victims;
    if (reports) {
      console.log(reports)
      return reports.map((store, index) => {
        return (
          <Marker
            key={index}
            id={index}
            position={{
              lat: store.location.latitude,
              lng: store.location.longitude
            }}
            onClick={() => console.log('You clicked me!')}
          />
        );
      });
    }
  };

  render() {
    const { lat, lng } = this.props.help.location;
    const { reports } = this.props.response.victims;
    return (
      <div className="map-container">
        <div className="map">
          <Map google={this.props.google} zoom={8} style={mapStyles} initialCenter={{ lat, lng }}>
            {this.displayMarkers()}
            <Marker position={{ lat, lng }} />
          </Map>
        </div>
        <div className="map-card">
          {
            reports ? 
            reports.map((victim) => (
              <Card
                key={victim.id}
                name={victim.name}
                phoneNo={victim.phoneNo}
                latitude={victim.location.latitude}
                longitude={victim.location.longitude}
                imageURL={victim.imageURL}
                status={victim.status}
              />
            )) : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  help: state.help,
  response: state.response
});

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API
})(connect(mapStateToProps)(GoogleMap));
