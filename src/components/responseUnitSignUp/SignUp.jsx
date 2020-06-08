import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { signUpUserStartAsync } from '../../redux/user/user.actions';
import { signupResponseUnit } from '../../redux/response/response.actions';
import '../../pages/signup/sign-up.css';
//custom button component reused from report accident component

class ResponseUnitSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: undefined,
      email: undefined,
      password: undefined,
      contact: {
        primaryPhoneNo: undefined,
        secondaryPhoneNo: undefined,
        primaryAddress: undefined,
        secondaryAddress: undefined,
        website: undefined
      }
    };
  }

  setLoginDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const api = 'api/response-unit/signup'
    const { name, email, password, contact } = this.state;
    const { currentUser } = this.props.response;
    if (
      !name ||
      !email ||
      !password ||
      !contact.primaryPhoneNo ||
      !contact.secondaryPhoneNo ||
      !contact.primaryAddress ||
      !contact.secondaryAddress ||
      !contact.website) return;
      
    
    const { signupResponseUnit } = this.props;
    signupResponseUnit(
      name,
      email,
      password,
      contact.primaryPhoneNo,
      contact.secondaryPhoneNo,
      contact.primaryAddress,
      contact.secondaryAddress,
      contact.website,
      api,
      currentUser.token
      )

    this.setState((prevState, prevProps) => ({
      name: undefined,
      email: undefined,
      password: undefined,
      contact: {
        primaryPhoneNo: undefined,
        secondaryPhoneNo: undefined,
        primaryAddress: undefined,
        secondaryAddress: undefined,
        website: undefined
      }
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
              <div className="register">
             <CustomButton className="btn-send register-btn">Register</CustomButton>
          </div>
            </fieldset>
          </form>
         
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUserStartAsync: (name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password) =>
    dispatch(signUpUserStartAsync(name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password)),
  signupResponseUnit: (
    name,
    email,
    primaryPhoneNo,
    secondaryPhoneNo,
    primaryAddress,
    SecondaryAddress,
    website,
    password,
    api,
    token
  ) => dispatch(signupResponseUnit(
    name,
    email,
    primaryPhoneNo,
    secondaryPhoneNo,
    primaryAddress,
    SecondaryAddress,
    website,
    password,
    api,
    token
  ))
});

const mapStateToProps = (state) => ({
  response: state.response
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseUnitSignUp);
