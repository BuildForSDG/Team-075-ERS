import React, { Fragment } from 'react';
import ReportHistory from '../../components/history/History';

class UserViewProfile extends React.Component {
  render() {
    return (
      <Fragment>
        <h2 className="main-heading">Welcome</h2>
        <p className="sub-heading">Profile information</p>
        <img src="images/profilePicture.svg" alt="profile-pic" id="profile-pic" />
        <h4 className="profile-name">John Doe</h4>
        <p className="phone-number">+234800000000</p>
        <p className="mail">johndoe@email.com</p>
        <h5 className="report-heading">Report History</h5>
        <ReportHistory />
      </Fragment>
    );
  }
}

export default UserViewProfile;
