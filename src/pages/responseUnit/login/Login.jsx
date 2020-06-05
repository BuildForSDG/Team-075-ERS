import React from 'react';
import CustomButton from '../../../components/custom-button/CustomButton';
import { connect } from 'react-redux';
import { loginUserStartAsync } from '../../../redux/user/user.actions';
import { ReactComponent as Girl } from '../../../assets/images/girl.svg';

import '../../signup/sign-up.css';

class ResponseUnitLogin extends React.Component {
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

          <div className="login">
            <form id="login" onSubmit={this.handleSubmit}>
              <fieldset>
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
              </fieldset>
            </form>

            <Girl id="girl" />
          </div>
        </section>
      );
  }
}

const mapDispatchToprops = (dispatch) => ({
  loginUserStartAsync: (email, password) => dispatch(loginUserStartAsync(email, password))
});

const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading
})

export default connect(mapStateToProps, mapDispatchToprops)(ResponseUnitLogin);
