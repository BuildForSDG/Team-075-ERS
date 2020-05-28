import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReportHistory from '../../components/history/History';
import { connect } from 'react-redux';
import CustomButton from '../../components/custom-button/CustomButton';
import './user-profile.css';

class UserViewProfile extends React.Component {
  render() {
    const { userId } = this.props.user;
    return (
      <Fragment>
        <h2 className="main-heading">Welcome</h2>
        <p className="sub-heading">Profile information</p>
        <img src="images/profilePicture.svg" alt="profile-pic" id="profile-pic" />
        <h4 className="profile-name">{userId.name}</h4>
        <p className="phone-number">{userId.phoneNo}</p>
        <p className="mail">{userId.email}</p>
        <Link to="/update-profile">
          <CustomButton className="custom-square-button">Update Profile</CustomButton>
        </Link>
        <h5 className="report-heading">Report History</h5>
        <ReportHistory />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps)(UserViewProfile);
