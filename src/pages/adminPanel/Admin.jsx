import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/card/card';
import './admin.css';

const Admin = ({ response }) => {
  const { reports } = response.victims;
  return (
    <div>
      <h1 className="main-heading">Welcome to the Admin Panel</h1>
      <div className="card-wrap">

      {
         reports ? reports.map((victim) => (
            <Card
            key={victim._id}
            name={victim._id}
            latitude={victim.location.latitude}
            longitude={victim.location.longitude}
            phoneNo={victim.reporter.phoneNo}
            imageURL={`https://robohash.org/set_set5/${victim._id}?size=50x50`}
            status={victim.response.status}
            />
         )) : null
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  response: state.response
})

export default connect(mapStateToProps)(Admin);
