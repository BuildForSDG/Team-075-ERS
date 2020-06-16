import React from 'react';

import { connect } from 'react-redux';
import Card from '../card/card';
import './response-units.css';

const ResponseUnits = ({ response }) => {
  return response.units.locations.map((unit, index) => (
    <div className="response-homepage">
      <Card
        key={index}
        name={unit.name}
        latitude={unit.location.latitude}
        longitude={unit.location.longitude}
        imageURL={`https://robohash.org/set_set5/${unit.name}?size=50x50`}
      />
    </div>
  ));
};

const mapStateToProps = (state) => ({
  response: state.response
});

export default connect(mapStateToProps)(ResponseUnits);
