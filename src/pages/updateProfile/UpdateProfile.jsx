import React, {Component} from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import './update-profile.css';
import { connect } from 'react-redux';
import updateUserProfileAsync  from '../../redux/updateProfile/updateProfile.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';

class UpdateProfile extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      phoneNo: '',
      emergencyContactName: '',
      emergencyContactPhoneNo: ''

    }
  }

  setupdateDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phoneNo, emergencyContactName, emergencyContactPhoneNo } = this.state;
    if (!name || !phoneNo || !emergencyContactName || !emergencyContactPhoneNo) return;
    // if (typeof(name) !== 'string' || typeof(emergencyContactName) !== 'string') return;
    const { updateUserProfileAsync } = this.props;
    const { token, userId } = this.props.user.currentUser;
    const { _id } = userId;
    console.log(this.state)
    updateUserProfileAsync(name, phoneNo, emergencyContactName, emergencyContactPhoneNo, _id,   token);
  };
  render(){
    const { userId } = this.props.user.currentUser;
    if (this.props.update.isPending) {
      return (
        <WithSpinner></WithSpinner>
      );
    }
    if (userId) {
      return(
        <div className="container">
  
          <section className="update-profile">
            <h4>Update Profile</h4>
            <p>Update your profile information</p>
  
  
            <img src="images/profilePicture.svg" alt="profile-pic" />
  
                  <h5>{userId.name}</h5>
                  <p>{userId.phoneNo}</p>
                  <p>{userId.email}</p>
  
            <form id="update-profile" onSubmit={this.handleSubmit}>
              <fieldset>
                  <div className="form-group">
                    <input 
                      name="name"
                      type="text" 
                      className="form-control" 
                      placeholder={userId.name}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="phoneNo"
                      type="text" 
                      className="form-control" 
                      placeholder={userId.phoneNo}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="emergencyContactName"
                      type="text" 
                      className="form-control" 
                      placeholder={userId.emergencyContact.name}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="emergencyContactPhoneNo"
                      type="text" 
                      className="form-control" 
                      placeholder={userId.emergencyContact.phoneNo}
                      onChange={this.setupdateDetails}
                      required
                      />
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
}

const mapStateToProps = (state) => ({
  user: state.user,
  update: state.update 
});

const mapDispatchToProps = (dispatch) => ({
  updateUserProfileAsync: (name, phoneNo, emergencyName, emergencyPhone, id, token) => 
    dispatch(updateUserProfileAsync(name, phoneNo, emergencyName, emergencyPhone, id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
