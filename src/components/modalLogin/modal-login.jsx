import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { closeAllModal } from '../../redux/modal/modal.actions';
import { loginUserStartAsync, resetUserStatus } from '../../redux/user/user.actions';
import '../modal/modal.css';

class ModalLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined
    }
  }

  setLoginDetails = (event) => {
    const { name, value } = event.target;
    this.setState((prevState, PrevProps) => ({ [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.resetUserStatus();
    const { email, password } = this.state;
    if (!email || !password) {
      return;
    }
    console.log(email, password);
    const { loginUserStartAsync } = this.props;
    loginUserStartAsync(email, password);
   
  };

  render (){

    return (
      <div className='modal display-block'>
        <section className="modal-main">
          <p onClick={() => this.props.closeAllModal()} className='modal-close'>x</p>
          <h1>Login to continue</h1>
          {this.props.children}
          <br></br>
              <form id="login" onSubmit={this.handleSubmit}>
                <fieldset>
                  <div className="">
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
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  closeAllModal: () => dispatch(closeAllModal()),
  loginUserStartAsync: (email, password) => dispatch(loginUserStartAsync(email, password)),
  resetUserStatus: () => dispatch(resetUserStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
