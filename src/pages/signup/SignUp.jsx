import React from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUserStartAsync } from '../../redux/user/user.actions';

import { ReactComponent as Line } from '../../assets/images/Line.svg';
// import { ReactComponent as Girl } from '../../assets/images/girl.svg';
// import { ReactComponent as Google } from '../../assets/images/google.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';

import './sign-up.css';
//custom button component reused from report accident component

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phoneNo: '',
      emergencyName: '',
      emergencyPhone: '',
      password: '',
      confirmPassword: '',
      terms: ''
    };
  }

  setLoginDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phoneNo, emergencyName, emergencyPhone, password, confirmPassword, terms } = this.state;
    const { signUpUserStartAsync } = this.props;
    if (password === confirmPassword && terms === 'on') {
      signUpUserStartAsync(name, email, phoneNo, emergencyName, emergencyPhone, password);
    }
    this.setState((prevState, prevProps) => ({
      name: '',
      email: '',
      phoneNo: '',
      emergencyContact: {
        name: '',
        phoneNo: ''
      },
      password: '',
      terms: ''
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
                  className="user-details"
                  required
                  placeholder="Name"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="phoneNo"
                  type="number"
                  className="user-details"
                  required
                  placeholder="Phone number"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="email"
                  type="email"
                  className="user-details"
                  required
                  placeholder="Email address"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="emergencyName"
                  type="text"
                  className="user-details"
                  required
                  placeholder="Emergency Name"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="emergencyPhone"
                  type="text"
                  className="user-details"
                  required
                  placeholder="Emergency Phone"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="password"
                  type="password"
                  className="user-details"
                  required
                  placeholder="Password"
                  onChange={this.setLoginDetails}
                />

                <input
                  name="confirmPassword"
                  type="password"
                  className="user-details"
                  required
                  placeholder="Confirm Password"
                  onChange={this.setLoginDetails}
                />

                <CustomButton className="btn-send register-btn">Register</CustomButton>

                <div className="policy">
                  <input type="checkbox" id="checkbox" name="terms" onChange={this.setLoginDetails} />

                  <label>
                    By clicking continue you agree to our
                    <br />
                    <b>Terms of Service and Privacy Policy</b>
                  </label>
                </div>
              </div>
            </fieldset>
          </form>

          <div className="middle">
            <Line className="divider" />
            <p>Or</p>
            <Line className="divider" />
          </div>

          <div className="right">
            <p>Sign up with one of your social accounts</p>

            <CustomButton className="soc-btn">
              <Facebook id="facebook" />
              <span>sign in with facebook</span>
            </CustomButton>

            <CustomButton className="soc-btn">
              {/* <Google id="google"/> */}
              <img src="images/google.svg" alt="google icon" id="google" />
              <span>sign in with google</span>
            </CustomButton>
          </div>

          <img src="images/girl.svg" alt="girl" id="girl" />
        </div>

        <p className="prompt-msg">
          Already have an account?
          <Link to="/login" className="link">
            {' '}
            <b>Log In</b>{' '}
          </Link>
        </p>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUserStartAsync: (name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password) =>
    dispatch(signUpUserStartAsync(name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password))
});

export default connect(null, mapDispatchToProps)(SignUp);
