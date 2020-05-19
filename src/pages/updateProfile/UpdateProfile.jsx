import React, {Component} from 'react';
import CustomButton from '../../components/custom-button'
import './update-profile.css';

class UpdateProfile extends Component{
  render(){
    return(
      <section>
        <h4>Update Profile</h4>
        <p>Update your profile information</p>

        <img src="images/updateProfile.svg" alt="profile-pic"/>

        <h5>Johnson Pearson</h5>
        <p>+234 803 1234 5678</p>
        <p>johnson@mail.com</p>
        <form id="update-profile" action="/report-accident">
          <fieldset>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Phone number"/>
            <input type="text" placeholder="Emergency contact name"/>
            <input type="text" placeholder="Emergency contact number"/>
            <CustomButton className="btn-send">
              Update
            </CustomButton>
          </fieldset>
        </form>
      </section>

    );
  }
}
export default UpdateProfile
