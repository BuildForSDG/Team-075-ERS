import React from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import { Link } from 'react-router-dom';
import './sign-up.css';

export default function SignUp() {
  return (
    <section>
      <h2 className="signup-title">Create An Account</h2>
      <div className="login-section">
        <form id="login" action="/login">
          <fieldset>
            <div className="left">
              <input name="name" type="text" className="user-details" placeholder="Name" />
              <input name="phoneNo" type="number" className="user-details" placeholder="Phone number" />
              <input name="email" type="email" className="user-details" placeholder="Email address" />
              <input name="password" type="password" className="user-details" placeholder="Password" />
              <CustomButton className="btn-send register-btn">Register</CustomButton>

              <div className="policy">
                <input type="checkbox" id="checkbox" name="terms" value="terms" />
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
        Already have an account?
        <Link to="/sign-up">
          <b>Log In</b>
        </Link>
      </p>
    </section>
  );
}
