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
      name: undefined,
      phoneNo: undefined,
      emergencyContactName: undefined,
      emergencyContactPhoneNo: undefined

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
    const { updateUserProfileAsync } = this.props;
    const { token, user } = this.props.user.currentUser;
    const { _id } = user;
    console.log(this.state)
    updateUserProfileAsync(name, phoneNo, emergencyContactName, emergencyContactPhoneNo, _id,   token);
  };
  render(){
    
    if (this.props.update.isPending) {
      return (
        <WithSpinner></WithSpinner>
      );
    }
    if (this.props.user.currentUser) {
      const { user } = this.props.user.currentUser;
      return(
        <div className="container">
  
          <section className="update-profile">
            <h4>Update Profile</h4>
            <p>Update your profile information</p>
  
  
            <img src="images/profilePicture.svg" alt="profile-pic" />
  
                  <h5>{user.name}</h5>
                  <p>{user.phoneNo}</p>
                  <p>{user.email}</p>
  
            <form id="update-profile" onSubmit={this.handleSubmit}>
              <fieldset>
                  <div className="form-group">
                    <input 
                      name="name"
                      type="text" 
                      className="form-control" 
                      placeholder={user.name}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="phoneNo"
                      type="text" 
                      className="form-control" 
                      placeholder={user.phoneNo}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="emergencyContactName"
                      type="text" 
                      className="form-control" 
                      placeholder={user.emergencyContact ? user.emergencyContact.name : ''}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="emergencyContactPhoneNo"
                      type="text" 
                      className="form-control" 
                      placeholder={user.emergencyContact ? user.emergencyContact.phoneNo : ''}
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
    if (this.props.response.currentUser) {
      const { currentUser } = this.props.response;
      return(
        <div className="container">
  
          <section className="update-profile">
            <h4>Update Profile</h4>
            <p>Update your profile information</p>
  
  
            <img src="images/profilePicture.svg" alt="profile-pic" />
  
                  <h5>{currentUser.responseUnit.name}</h5>
                  <p>{currentUser.responseUnit.contact.primaryPhoneNo}</p>
                  <p>{currentUser.responseUnit.email}</p>
  
            <form id="update-profile" onSubmit={this.handleSubmit}>
              <fieldset>
                  <div className="form-group">
                    <input 
                      name="name"
                      type="text" 
                      className="form-control" 
                      placeholder={currentUser.responseUnit.name}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="phoneNo"
                      type="text" 
                      className="form-control" 
                      placeholder={currentUser.responseUnit.contact.primaryPhoneNo}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="emergencyContactName"
                      type="text" 
                      className="form-control" 
                      placeholder={currentUser.responseUnit.name}
                      onChange={this.setupdateDetails}
                      required
                      />
                  </div>
  
                  <div className="form-group">
                    <input
                      name="emergencyContactPhoneNo"
                      type="text" 
                      className="form-control" 
                      placeholder={currentUser.responseUnit.name}
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
  update: state.update,
  response: state.response
});

const mapDispatchToProps = (dispatch) => ({
  updateUserProfileAsync: (name, phoneNo, emergencyName, emergencyPhone, id, token) => 
    dispatch(updateUserProfileAsync(name, phoneNo, emergencyName, emergencyPhone, id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
