import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import { showVictimsInfo } from '../../redux/modal/modal.actions';
import Card from '../../components/card/card';
import './googleMap.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class GoogleMap extends React.Component {
  componentDidMount() {}

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
              url: 'https://banner2.cleanpng.com/20180607/bhy/kisspng-american-red-cross-international-red-cross-and-red-cruz-roja-5b19bb256ebed0.5601102915284129654536.jpg',
              scaledSize: new this.props.google.maps.Size(25, 20)
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
              scaledSize: new this.props.google.maps.Size(25, 48)
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
          <Map google={this.props.google} zoom={6} style={mapStyles} initialCenter={{ lat, lng }}>
            {this.displayMarkers()}
            {this.displayResponseMarkers()}
            <Marker position={{ lat, lng }} />
          </Map>
        </div>
        <div className="map-card">
          {reports
            ? reports.map((victim, index) => (
              <div className="response-homepage victim-card" key={victim._id} onClick={() => this.props.showVictimsInfo(index)}>
                <Card
                  key={victim._id}
                  name={victim.reporter.userId.name}
                  phoneNo={victim.phoneNo}
                  latitude={victim.location.latitude}
                  longitude={victim.location.longitude}
                  imageURL={ `https://robohash.org/set_set5/${victim.reporter.userId.name}?size=50x50`}
                  status={victim.status}
                />
              </div>
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

const mapDispatchToProps = (dispatch) => ({
  showVictimsInfo: (index) => dispatch(showVictimsInfo(index))
});

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API
})(connect(mapStateToProps, mapDispatchToProps)(GoogleMap));
