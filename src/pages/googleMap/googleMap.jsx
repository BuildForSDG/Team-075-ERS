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


  componentDidMount() {
    
  }
  

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
            icon={{
              
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/1200px-Map_marker.svg.png',
              scaledSize: new this.props.google.maps.Size(25,48)
              
            }}
            onClick={() => console.log('You clicked me!')}
          />
        );
      });
    }
  };

  displayResponseMarkers = () => {
    const { locations } = this.props.response.units;
    if (locations) {
      return locations.map((store, index) => {
        return (
          <Marker
            key={store._id}
            id={index}
            position={{
              lat: store.location.latitude,
              lng: store.location.longitude
            }}
            icon={{
              
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/1200px-Map_marker.svg.png',
              scaledSize: new this.props.google.maps.Size(25,48)
              
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
          <Map google={this.props.google} zoom={6} style={mapStyles} initialCenter={{ lat, lng }}>
            {this.displayMarkers()}
            {this.displayResponseMarkers()}
            <Marker 
              position={{ lat, lng }}
              
            />
          </Map>
        </div>
        <div className="map-card">
          {reports
            ? reports.map((victim) => (
                <Card
                  key={victim._id}
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
        <script type="text/javascript" src={`//maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}`}></script>
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
