import React from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUserStartAsync } from '../../redux/user/user.actions';

import { ReactComponent as Line } from '../../assets/images/Line.svg';
import Toast from '../../components/toast/toast';
import { toast } from 'react-toastify';
import { ReactComponent as Girl } from '../../assets/images/girl.svg';
// import { ReactComponent as Google } from '../../assets/images/google.svg';
// import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';

import './sign-up.css';
//custom button component reused from report accident component

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: undefined,
      email: undefined,
      phoneNo: undefined,
      password: undefined,
      confirmPassword: undefined,
      terms: undefined,
      status: 'Submiting'
    };
  }

  setLoginDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phoneNo, password, confirmPassword, terms } = this.state;
    if (!name || !email || !phoneNo || !password) return;
    const { signUpUserStartAsync } = this.props;
    if (password === confirmPassword && terms === 'on') {
      signUpUserStartAsync(name, email, phoneNo, password);
    }
    
  };

  render() {
    return (
      <div className="container">
        <section>
          <Toast></Toast>
          <h2 className="signup-title">Create An Account</h2>

          <div className="login-section">
            <form id="login" onSubmit={this.handleSubmit}>
              <p className='error-message'>{this.props.user.signup === 422 ? this.props.user.currentUser ?
              this.props.user.currentUser.message : null : null}</p>
              <p className='error-message'>{this.state.password !== this.state.confirmPassword ? 'Password mismatch!' : null}</p>
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
                    type="text"
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

                  <div className="policy">
                    <input type="checkbox" id="checkbox" name="terms" onChange={this.setLoginDetails} />
                    <label htmlFor="checkbox">
                      By clicking continue you agree to our
                      <br />
                      <span>
                        <b>Terms of Service and Privacy Policy</b>
                      </span>
                    </label>
                  </div>

                  <CustomButton
                    className="btn-send register-btn"
                    onClick={() => (toast.current = toast(this.state.status))}
                  >
                    Register
                  </CustomButton>
                </div>
              </fieldset>
            </form>

            <div className="middle">
              <Line className="divider" />
              <p>Or</p>
              <Line className="divider" />
            </div>

            <div className="right social-accounts">
              <p>Sign up with one of your social accounts</p>

              <CustomButton className="soc-btn">
                <img src="images/facebook.svg" id="facebook" alt="facebook login" />
                <span>sign in with facebook</span>
              </CustomButton>

              <CustomButton className="soc-btn">
                {/* <Google id="google"/> */}
                <img src="images/google.svg" alt="google login" id="google" />
                <span>sign in with google</span>
              </CustomButton>
            </div>

            <Girl id="girl" />
          </div>

          <p className="prompt-msg">
            Already have an account?
            <Link to="/login" className="link">
              <b>Log In</b>
            </Link>
          </p>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUserStartAsync: (name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password) =>
    dispatch(signUpUserStartAsync(name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password))
});

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
