import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { helpSent } from '../../redux/sendHelp/sendHelp.actions';
import { logoutUser } from '../../redux/user/user.actions';
import { logoutResponseUnit } from '../../redux/response/response.actions';
import { showUserProfile, closeAllModal, showLogoutModal } from '../../redux/modal/modal.actions';
import CustomButton from '../custom-button/CustomButton';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  showMenu = () => {
    this.setState((prevState, prevProps) => ({
      showMenu: !this.state.showMenu
    }));
  };

  render() {
    // console.log('currentUser--->', this.props)
    const { login, currentUser } = this.props.user;
    return (
      <header>
        {
        
          (
            <>
            <Link to="/">
              <Logo
                alt="help logo"
                id="logo"
                onClick={() => {
                  return this.props.helpSent(false);
                }}
              />
            </Link>
            <nav className={`nav ${this.state.showMenu ? 'show-menu' : ''}`}>
            {
            
              ((login === 200) || this.props.response.currentUser) ? (
                <>
                  <p className="nav-link" onClick={this.props.showUserProfile}>
                    {`Welcome, ${(currentUser && !this.props.response.currentUser) ? currentUser.user.name : 
                    
                    `${ this.props.response.currentUser ? this.props.response.currentUser.responseUnit.name : null}`
                    
                    }`}{' '}
                  </p>
                  
                  <p 
                    className="nav-link last-link" 
                    // to="/ers-login" 
                    onClick={this.props.showLogoutModal}
                    >
                    ERS
                  </p>
                  <Link className="nav-link last-link" to="/faq">
                    FAQ
                  </Link>
                  <Link className="no-padding" to="/login" onClick={() => {
                    return (
                      this.props.logoutUser(),
                      this.props.logoutResponseUnit(),
                      this.props.closeAllModal()
                      )}}>
                    <CustomButton className="custom-square-button">Logout</CustomButton>
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="nav-link" to="/sign-up">
                    Sign Up
                  </Link>
                  <Link className="nav-link" to="/ers-login">
                    ERS
                  </Link>
                  <Link className="nav-link" to="/faq">
                    FAQ
                  </Link>
                </>
              )
              }
             
            </nav>
            <img src="images/bars.svg" alt="hamburger icon" id="hamburger-icon" onClick={this.showMenu} />
            </>
          )
        }
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  helpSent: (value) => dispatch(helpSent(value)),
  logoutUser: () => dispatch(logoutUser()),
  showUserProfile: () => dispatch(showUserProfile()),
  logoutResponseUnit: () => dispatch(logoutResponseUnit()),
  closeAllModal: () => dispatch(closeAllModal()),
  showLogoutModal: () => dispatch(showLogoutModal())
});

const mapStateToProps = (state) => ({
  user: state.user,
  response: state.response
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
