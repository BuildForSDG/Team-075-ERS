import React from 'react';
import Card from '../../components/card/card';
import data from '../../utils/data';
import './response-unit-homepage.css';
const ResponseUnitHomePage = () => (
  <div className="ers-container">
    {data.map((victim) => (
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
    ))}
  </div>
);

export default ResponseUnitHomePage;
