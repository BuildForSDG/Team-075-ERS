import React from 'react';
import './modal.css';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <CustomButton className="btn-close" onClick={handleClose}>
          Close
        </CustomButton>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modal: state.modal
});

export default connect(mapStateToProps)(Modal);
