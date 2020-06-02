import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import Card from '../../components/card/card';
import './googleMap.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class GoogleMap extends React.Component {
  

  displayMarkers = () => {
    const { reports } = this.props.response.victims;
    if (reports) {
      return reports.map((store, index) => {
        return (
          <Marker
            key={store._id}
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
    console.log(reports)
    return (
      <div className="map-container">
        <div className="map">
          <Map google={this.props.google} zoom={8} style={mapStyles} initialCenter={{ lat, lng }}>
            {this.displayMarkers()}
            <Marker position={{ lat, lng }} />
          </Map>
        </div>
        <div className="map-card">
          {reports
            ? reports.map((victim) => (
                <Card
                  key={victim.id}
                  name={victim.name}
                  phoneNo={victim.phoneNo}
                  latitude={victim.location.latitude}
                  longitude={victim.location.longitude}
                  imageURL={victim.imageURL}
                  status={victim.status}
                />
              ))
            : null}
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
