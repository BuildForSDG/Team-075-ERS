import React from 'react';
import Card from '../../components/card/card';
import data from '../../utils/data';

const ResponseUnitHomePage = () =>
  data.map((victim) => (
    <div className="ers-container">
      <div className="response-homepage" key={victim.id}>
        <Card
          name={victim.name}
          phoneNo={victim.phoneNo}
          latitude={victim.location.latitude}
          longitude={victim.location.longitude}
          imageURL={victim.imageURL}
          status={victim.status}
        />
      </div>
    </div>
  ));

export default ResponseUnitHomePage;
