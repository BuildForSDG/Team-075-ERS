import React from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserStartAsync } from '../../redux/user/user.actions';
import { ReactComponent as Line } from '../../assets/images/Line.svg';
import { ReactComponent as Girl } from '../../assets/images/girl.svg';
// import { ReactComponent as Google } from '../../assets/images/google.svg';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';

import '../signup/sign-up.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: 'Password',
      email: 'Email address'
    };
  }

  setLoginDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { loginUserStartAsync } = this.props;
    loginUserStartAsync(email, password);
    this.setState((prevState, prevProps) => ({
      password: 'Password',
      email: 'Email address'
    }));
  };

  render() {
    return (
      <section>
        <h2 className="login-title">Hello</h2>

        <p id="sub-heading">Please sign in to your account</p>

        <div className="login-section">
          <form id="login" onSubmit={this.handleSubmit}>
            <fieldset>
              <div className="left">
                <input
                  name="email"
                  type="email"
                  className="user-details"
                  placeholder={this.state.email}
                  onChange={this.setLoginDetails}
                />

                <input
                  name="password"
                  type="password"
                  className="user-details"
                  placeholder={this.state.password}
                  onChange={this.setLoginDetails}
                />

                <p className="forgot-psw">
                  <b>Forgot password?</b>
                </p>

                <CustomButton className="btn-send register-btn">Login</CustomButton>
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
              <img src="images/google.svg" alt="google icon" id="google" />
              {/* <Google id="google"/> */}
              <span>sign in with google</span>
            </CustomButton>
          </div>

          <Girl id="girl" />
        </div>

        <p className="prompt-msg">
          Don't an account?
          <Link to="/sign-up" className="link">
            {' '}
            <b>Sign Up</b>{' '}
          </Link>
        </p>
      </section>
    );
  }
}

const mapDispatchToprops = (dispatch) => ({
  loginUserStartAsync: (email, password) => dispatch(loginUserStartAsync(email, password))
});

export default connect(null, mapDispatchToprops)(Login);
