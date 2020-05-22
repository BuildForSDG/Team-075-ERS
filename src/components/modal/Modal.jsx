import React from 'react';
import './modal.css';
import CustomButton from '../custom-button/CustomButton';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Help request Sent</h2>
        <p>Please Stay Calm!</p>
        <p>Help will reach out to you soon</p>
        <div>
          <p>You will recieve a feedback sms</p>
        </div>
        <div>
          <p>Response team will reach your location</p>
        </div>
        <div>
          <p>Response team will help get you out of the situation and take necessary actions</p>
        </div>
        <CustomButton className="btn-send" onClick={handleClose}>
          Close
        </CustomButton>
      </section>
    </div>
  );
};

export default Modal;
