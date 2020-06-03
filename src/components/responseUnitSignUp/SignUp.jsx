import React from 'react';
import CustomButton from '../custom-button/CustomButton';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUserStartAsync } from '../../redux/user/user.actions';

// import { ReactComponent as Girl } from '../../assets/images/girl.svg';
// import { ReactComponent as Google } from '../../assets/images/google.svg';
// import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';

import './sign-up.css';
//custom button component reused from report accident component

class ResponseUnitSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      contact: {
        primaryPhoneNo: '',
        secondaryPhoneNo: '',
        primaryAddress: '',
        secondaryAddress: '',
        website: ''
      }
    };
  }

  setLoginDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, contact } = this.state;
    const { signUpUserStartAsync } = this.props;
    // if (password === confirmPassword && terms === 'on') {
    //   signUpUserStartAsync(name, email, phoneNo, password);
    // }
    this.setState((prevState, prevProps) => ({
      name: '',
      email: '',
      password: '',
      contact: {}
    }));
  };

  render() {
    return (
      <section>
        <h2 className="signup-title">Create An Account</h2>

        <div className="login-section">
          <form id="login" onSubmit={this.handleSubmit}>
            <fieldset>
              <div className="left">
                <input
                  name="name"
                  type="text"
                  className="response-unit-details"
                  required
                  placeholder="Name"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="email"
                  type="email"
                  className="response-unit-details"
                  required
                  placeholder="Email address"
                  onChange={this.setLoginDetails}
                />

                    <input
                      name="primaryPhoneNo"
                      type="number"
                      className="response-unit-details"
                      required
                      placeholder="Primary phone number"
                      onChange={this.setLoginDetails}
                   />

                <input
                  name="secondaryPhoneNo"
                  type="number"
                  className="response-unit-details"
                  required
                  placeholder="Secondary phone number"
                  onChange={this.setLoginDetails}
                />


                {/* <div className="policy">
                  <input type='checkbox' id="checkbox" name="terms" onChange={this.setLoginDetails}/>
                  <label htmlFor = "checkbox">
                    By clicking continue you agree to our
                    <br />
                    <b>Terms of Service and Privacy Policy</b>
                  </label>
                </div> */}
              </div>
            </fieldset>
          </form>


          <div className="right">
                <input
                  name="primaryAddress"
                  type="text"
                  className="response-unit-details"
                  required
                  placeholder="Primary address"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="secondaryAddress"
                  type="text"
                  className="response-unit-details"
                  required
                  placeholder="Secondary address"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="website"
                  type="text"
                  className="response-unit-details"
                  required
                  placeholder="Website"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="password"
                  type="password"
                  className="response-unit-details"
                  required
                  placeholder="Password"
                  onChange={this.setLoginDetails}
                />


          </div>

          <img src="../images/girl.svg" alt="girl" id="girl" />
        </div>

          <div className="register">
             <CustomButton className="btn-send register-btn">Register</CustomButton>
          </div>

        {/* <p className="prompt-msg">
          Already have an account?
          <Link to="/login" className="link">
            {' '}
            <b>Log In</b>{' '}
          </Link>
        </p> */}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUserStartAsync: (name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password) =>
    dispatch(signUpUserStartAsync(name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password))
});

export default connect(null, mapDispatchToProps)(ResponseUnitSignUp);