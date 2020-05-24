import React from 'react';
import Modal from './Modal';

export default function MessageModal(props) {
  return (
    <Modal show={props.show} handleClose={props.hideModal}>
      <h2 className="heading">Help request Sent</h2>
      <p className="sub-message">
        Please Stay Calm!
        <br />
        Help will reach out to you soon
      </p>
      <div className="main-content">
        <div className="left-div">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line line2"></div>
          <div className="circle"></div>
        </div>
        <div className="right-div">
          <div>
            <p>You will recieve a feedback sms</p>
          </div>
          <div>
            <p>Response team will reach your location</p>
          </div>
          <div>
            <p>Response team will help get you out of the situation and take necessary actions</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
