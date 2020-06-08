import React from 'react';
import CustomButton from '../../../components/custom-button/CustomButton';
import { connect } from 'react-redux';
import { loginResponseUnitAsync } from '../../../redux/response/response.actions';
import { ReactComponent as Girl } from '../../../assets/images/girl.svg';
import { logoutUser } from '../../../redux/user/user.actions';
import WithSpinner from '../../../components/with-spinner/with-spinner';
import '../../signup/sign-up.css';


class ResponseUnitLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      password: undefined,
      email: undefined

    };
  }

  setLoginDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) return;
    const { loginResponseUnitAsync, logoutUser } = this.props;
    const api = `api/response-unit/login`
    loginResponseUnitAsync(email, password, api);
    logoutUser();
    this.setState((prevState, prevProps) => ({
      password: undefined,
      email: undefined

    }));
  };

  render() {
    if (!this.props.response.isPending) {

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
    return <WithSpinner></WithSpinner>
  }
}

const mapDispatchToprops = (dispatch) => ({
  loginResponseUnitAsync: (email, password, api) => dispatch(loginResponseUnitAsync(email, password, api)),
  logoutUser: () => dispatch(logoutUser())

});

const mapStateToProps = (state) => ({
  response: state.response
})

export default connect(mapStateToProps, mapDispatchToprops)(ResponseUnitLogin);
