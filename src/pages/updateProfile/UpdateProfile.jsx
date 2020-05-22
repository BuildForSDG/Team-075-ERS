import React, {Component} from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import './update-profile.css';

class UpdateProfile extends Component{
  render(){
    return(
      <section className="update-profile">
        <h4>Update Profile</h4>
        <p>Update your profile information</p>

        <img src="images/profilePicture.svg" alt="profile-pic" />

        <h5>Johnson Pearson</h5>
        <p>+234 803 1234 5678</p>
        <p>johnson@mail.com</p>

        <form id="update-profile" action="/update-profile">
          <fieldset>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name"/>
            </div>

           <div className="form-group">
             <input type="text" className="form-control" placeholder="Phone number"/>
           </div>

          <div className="form-group">
            <input type="text" className="form-control" placeholder="Emergency contact name"/>
          </div>

          <div className="form-group">
            <input type="text" className="form-control" placeholder="Emergency contact number"/>
          </div>

            <CustomButton className="btn-send">
              Update
            </CustomButton>
          </fieldset>
        </form>

      </section>

    );
  }
}
export default UpdateProfile;
