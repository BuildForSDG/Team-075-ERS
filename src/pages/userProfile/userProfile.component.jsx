import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showVictimsInfo, showUserProfile } from '../../redux/modal/modal.actions';
import ReportHistory from '../../components/history/History';
import CustomButton from '../../components/custom-button/CustomButton';
import './user-profile.css';

class UserViewProfile extends React.Component {
  render() {
    const { user } = this.props.user;
    return (
      <Fragment>
        <h2 className="main-heading">Welcome</h2>
        <p className="sub-heading">Profile information</p>
        <img src="images/profilePicture.svg" alt="profile-pic" id="profile-pic" />
        <h4 className="profile-name">{user.name}</h4>
        <p className="phone-number">{user.phoneNo}</p>
        <p className="mail">{user.email}</p>
        <Link to="/update-profile">
          <CustomButton 
            className="custom-square-button"
            onClick={this.props.showUserProfile}
          >
            Update Profile
          </CustomButton>
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

const mapDispatchToProps = (dispatch) => ({
  showVictimsInfo: () => dispatch(showVictimsInfo()),
  showUserProfile: () => dispatch(showUserProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserViewProfile);
