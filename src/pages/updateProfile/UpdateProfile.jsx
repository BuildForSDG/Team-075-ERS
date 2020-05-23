import React, {Component} from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import './update-profile.css';
import { connect } from 'react-redux';

class UpdateProfile extends Component{
  render(){
    const { userId } = this.props.user;
    return(
      <div className="container">

        <section className="update-profile">
          <h4>Update Profile</h4>
          <p>Update your profile information</p>


          <img src="images/profilePicture.svg" alt="profile-pic" />

                <h5>{userId.name}</h5>
                <p>{userId.phoneNo}</p>
                <p>{userId.email}</p>

          <form id="update-profile" action="/update-profile">
            <fieldset>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder={userId.name} />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder={userId.phoneNo} />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder={userId.emergencyContact.name} />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder={userId.emergencyContact.phoneNo} />
                </div>

                <CustomButton className="btn-send">
                  Update
                </CustomButton>
            </fieldset>
          </form>

        </section>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps)(UpdateProfile);
