import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import '../modal/modal.css';

const Logout = () => (
  <div className='modal display-block'>
    <section className="modal-main">
      Logout to continue
      <CustomButton className="btn-send register-btn">
          Logout
      </CustomButton>
    </section>
  </div>
);

export default Logout;