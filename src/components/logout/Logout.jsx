import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import '../modal/modal.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/user.actions';
import { logoutResponseUnit } from '../../redux/response/response.actions';
import { closeAllModal } from '../../redux/modal/modal.actions';
import { Link } from 'react-router-dom';

import { ReactComponent as Image } from '../../assets/images/Logout.svg';
import './logout.css';

const Logout = ({ logoutUser, logoutResponseUnit, closeAllModal }) => (
  <div className="modal display-block">
    <section className="modal-main">
      <Image className="logout-img" />
      <h3>Please logout to continue</h3>
      <Link to="/ers-login">
        <CustomButton
          className="btn-send register-btn logout"
          onClick={() => {
            return logoutUser(), logoutResponseUnit(), closeAllModal();
          }}
        >
          Logout
        </CustomButton>
      </Link>
    </section>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  logoutResponseUnit: () => dispatch(logoutResponseUnit()),
  closeAllModal: () => dispatch(closeAllModal())
});

export default connect(null, mapDispatchToProps)(Logout);
