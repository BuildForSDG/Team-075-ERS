import React from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import { Link } from 'react-router-dom';
import '../signup/sign-up.css';
//custom button component reused from report accident component

export default function Login() {
  return (
    <section>
      <h2 className="login-title">Hello</h2>
      <p id="sub-heading">Please sign in to your account</p>
      <div className="login-section">
        <form id="login" action="/login">
          <fieldset>
            <div className="left">
              <input name="email" type="email" className="user-details" placeholder="Email address" />
              <input name="password" type="password" className="user-details" placeholder="Password" />
              <p className="forgot-psw">
                <b>Forgot password?</b>
              </p>
              <CustomButton className="btn-send register-btn">Login</CustomButton>
            </div>
          </fieldset>
        </form>

        <div className="middle">
          <img src="images/line.svg" alt="line" className="divider" />
          <p>Or</p>
          <img src="images/line.svg" alt="line" className="divider" />
        </div>

        <div className="right">
          <p>Sign up with one of your social accounts</p>
          <CustomButton className="soc-btn">
            <img src="images/facebook.svg" alt="facebook icon" id="facebook" />
            <span>sign in with facebook</span>
          </CustomButton>
          <CustomButton className="soc-btn">
            <img src="images/google.svg" alt="google icon" id="google" />
            <span>sign in with google</span>
          </CustomButton>
        </div>
        <img src="images/girl.svg" alt="girl" id="girl" />
      </div>
      <p className="prompt-msg">
        Don't an account?
        <Link to="/login">
          <b>Sign Up</b>
        </Link>
      </p>
    </section>
  );
}
